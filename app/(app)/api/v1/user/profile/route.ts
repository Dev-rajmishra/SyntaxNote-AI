import { createClient } from "@/lib/supabase/server";
import { NextResponse, NextRequest } from "next/server";


// GET: Getting user details
export async function GET() {
  const supabase = await createClient();

  // Securely get the user from the server-side session cookie
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized. Please sign in." },
      { status: 401 },
    );

  }
  return NextResponse.json({
    success: true,
    profile: {
      id: user.id,
      email: user.email,
      name: user.user_metadata?.name || "Unknown Scholar",
      lastSignIn: user.last_sign_in_at,
    },
  });
};


// POST: Update the user's profile data (e.g., changing their name)
export async function POST(req: NextRequest) {
  const supabase = await createClient();

  // 1. Verify the user is logged in
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized. Please sign in." },
      { status: 401 },
    );
  }

  // 2. Parse the incoming request body
  const body = await req.json();
  const { name } = body;

  if (!name || name.trim() === "") {
    return NextResponse.json(
      { success: false, message: "Name cannot be empty." },
      { status: 400 },
    );
  }

  // 3. Update the user's metadata in Supabase
  const { data, error: updateError } = await supabase.auth.updateUser({
    data: { name: name.trim() },
  });

  if (updateError) {
    return NextResponse.json(
      { success: false, message: updateError.message },
      { status: 400 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Library card updated successfully! ✍️",
    user: data.user,
  });
};

