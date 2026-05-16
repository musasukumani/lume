export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5EDE0] flex items-center justify-center px-4">
      {children}
    </div>
  )
}
