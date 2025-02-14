import { Menu, Home, Printer, LogOut } from "lucide-react"

export default function VITPortal() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#003B6F] text-white px-2 py-1.5 flex items-center justify-between border-b border-blue-400">
        <Menu className="w-6 h-6" />
        <div className="flex items-center gap-1">
          <Home className="w-5 h-5" />
          <span className="text-sm font-medium">VIT</span>
          <span className="text-sm text-gray-300">(Vellore Campus)</span>
        </div>
        <div className="flex items-center gap-2">
          <Printer className="w-5 h-5" />
          <LogOut className="w-5 h-5" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="flex gap-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dz04Kjn9XWNylhWEnD6xav85d7aHsD.png"
              alt="Student"
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="mb-1">
                <div className="text-[#FF0000] text-sm font-medium">REGISTER NUMBER: 23BCE0226</div>
                <div className="text-sm font-medium">VIT EMAIL:</div>
                <div className="text-sm">srijan.srivastava2023@vitstudent.ac.in</div>
              </div>
              <div className="mb-1">
                <div className="text-[#FF0000] text-sm font-medium">PROGRAM & BRANCH:</div>
                <div className="text-sm">BTECH - Computer Science and Engineering</div>
              </div>
              <div>
                <div className="text-[#FF0000] text-sm font-medium">SCHOOL NAME:</div>
                <div className="text-sm">School of Computer Science and Engineering</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-2">
          {[
            "PERSONAL INFORMATION",
            "EDUCATIONAL INFORMATION",
            "FAMILY INFORMATION",
            "PROCTOR INFORMATION",
            "HOSTEL INFORMATION",
          ].map((text, index) => (
            <button
              key={index}
              className="w-full bg-gradient-to-r from-[#1E4B87] to-[#003366] text-white p-3 rounded flex items-center gap-3 shadow-sm hover:from-[#003366] hover:to-[#1E4B87] transition-all"
            >
              <div className="w-6 h-6 bg-[#FFD700] rounded flex items-center justify-center">
                <span className="text-[#003366] text-xs">🔑</span>
              </div>
              <span className="font-medium text-sm">{text}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}

