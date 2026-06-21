# 📓 SyntaxNote

A modern, interactive Markdown note-taking application designed for students, developers, writers, and professionals to capture ideas, organize knowledge, and create beautifully structured notes.

**Live Demo:** [syntaxnote.appwrite.network](https://syntaxnote.appwrite.network)

---

## ✨ Features

### 🎨 Interactive & Immersive UI
- **3D Page-Flip Animation**: Dynamic, physics-based page curl and flip animations on load and interaction
- **Beautiful Welcome Experience**: Engaging book-style interface with paper texture and decorative elements
- **Responsive Design**: Seamlessly adapts to desktop, tablet, and mobile devices

### 📝 Rich Note Management
- **Doodle Canvas**: Sketch and draw directly on your notes with interactive canvas tools
- **Draggable Post-its**: Create, drag, and arrange colorful sticky notes anywhere on your workspace
- **Markdown Support**: Full Markdown editor for formatting and structuring your content
- **Rich Text Editing**: Powered by TipTap editor with extensive formatting capabilities

### 🔐 User Authentication & Sync
- **Supabase Integration**: Secure authentication and real-time database synchronization
- **User Workspace**: Personalized workspace with local storage persistence
- **Cloud Sync**: Automatic synchronization of notes across devices

### 🎯 Developer-Friendly Stack
- Built with modern TypeScript for type safety
- Next.js 16 App Router for optimal performance
- Tailwind CSS with custom animations for beautiful styling
- Accessible component library (shadcn/ui, Radix UI, React Aria)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/imrajmishra/SyntaxNote.git
   cd SyntaxNote
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) and start taking notes!

---

## 📁 Project Structure

```
SyntaxNote/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Welcome/Entry page with 3D flip animation
│   ├── layout.tsx         # Root layout and metadata
│   └── globals.css        # Global styles and animations
├── components/            # Reusable React components
│   ├── WelcomePage/       # Interactive welcome experience
│   ├── Loader/            # Loading states (PencilLoader)
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions and helpers
├── utils/                 # Common utilities
├── public/                # Static assets
├── proxy.ts              # API proxy configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org) 16.2.9
- **Language**: TypeScript 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4 + Custom Animations
- **UI Components**: 
  - [shadcn/ui](https://ui.shadcn.com) - Modern component library
  - [Radix UI](https://www.radix-ui.com) - Primitive accessibility components
  - [React Aria](https://react-spectrum.adobe.com/react-aria/) - Accessibility hooks
  - [Lucide React](https://lucide.dev) - Beautiful icons

### Editor & Markup
- **[TipTap](https://tiptap.dev)** - Headless Vue-less rich text editor (v3.26.1)
- **[ProseMirror](https://prosemirror.net)** - Collaborative editing foundation

### Backend & Database
- **[Supabase](https://supabase.com)** - PostgreSQL, Auth, and Real-time APIs
  - Authentication (SSR support with `@supabase/ssr`)
  - Real-time database synchronization
  - User management

### Drawing & Canvas
- **[tldraw](https://www.tldraw.com)** - Collaborative whiteboard library
- **[canvas-confetti](https://www.npmjs.com/package/canvas-confetti) - Celebration animations

### Additional Libraries
- **[Motion](https://motion.dev)** - Animation library
- **[Axios](https://axios-http.com)** - HTTP client
- **[Zod](https://zod.dev)** - TypeScript-first schema validation
- **[Class Variance Authority](https://cva.style/)** - Type-safe component variants
- **[clsx](https://github.com/lukeed/clsx)** - Utility for conditional classNames

---

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
The project is optimized for [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy with a single click

Learn more in the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Other Deployment Options
- Docker
- Self-hosted Node.js servers
- AWS, Google Cloud, Azure

---

## 🎮 Usage Guide

### Taking Your First Note
1. Visit the welcome page with the interactive book interface
2. Click the flip button to enter your personal workspace
3. Start typing in the Markdown editor
4. Use drag-and-drop sticky notes for quick reminders
5. Draw on the canvas for visual notes and sketches

### Features in Action
- **Format Text**: Use Markdown syntax or toolbar for bold, italic, lists, code blocks
- **Add Images**: Embed images directly in your notes
- **Create Sketches**: Use the doodle canvas for visual note-taking
- **Organize**: Drag sticky notes to organize your workspace
- **Auto-Save**: Changes are automatically saved to your workspace

---

## 🔒 Security & Privacy

- **End-to-End Ready**: Supabase provides secure authentication
- **User Data**: All notes are stored securely in Supabase PostgreSQL
- **Local Storage**: Browser local storage for instant access
- **No Tracking**: Privacy-focused, no analytics or third-party trackers

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Code Style
- TypeScript for type safety
- ESLint configuration in `eslint.config.mjs`
- Tailwind CSS for styling
- Component-based architecture

---

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🐛 Known Issues & Roadmap

### Current Status
- ✅ Interactive welcome experience
- ✅ Basic note editing with Markdown
- ✅ Sticky note management
- ✅ User authentication
- 🚧 Advanced collaboration features
- 🚧 Offline mode
- 🚧 Export to PDF/Word

### Future Enhancements
- [ ] Real-time collaborative editing
- [ ] Advanced note organization (folders, tags, search)
- [ ] Dark mode toggle
- [ ] Mobile app (React Native)
- [ ] AI-powered note suggestions
- [ ] Voice notes with transcription

---

## 📄 License

This project is open source and available under the MIT License.

---

## 💬 Support & Feedback

- **Issues**: [GitHub Issues](https://github.com/imrajmishra/SyntaxNote/issues)
- **Discussions**: [GitHub Discussions](https://github.com/imrajmishra/SyntaxNote/discussions)
- **Email**: [Open an issue for contact info]

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React framework
- [Supabase](https://supabase.com) - Open-source Firebase alternative
- [TipTap](https://tiptap.dev) - Powerful rich text editor
- [shadcn/ui](https://ui.shadcn.com) - High-quality UI components
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- All our amazing contributors and users!

---

**Made with ❤️ by [imrajmishra](https://github.com/imrajmishra)**

⭐ If you find this project helpful, please consider giving it a star!
