import { useState,useEffect} from "react"
import { Menu, Home, Printer, LogOut, ChevronDown } from "lucide-react"
import {img_url} from "../utils/constants"

export default function VITPortal() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentRoomNo, setCurrentRoomNo] = useState<string>("423")

  const studentInfo = {
    registerNumber: "23BCE0226",
    name: "SRIJAN SRIVASTAVA",
    email: "srijan.srivastava2023@vitstudent.ac.in",
    program: "BTECH - Computer Science and Engineering",
    school: "School of Computer Science and Engineering",
    hostelInfo: {
      applicationNumber: "2023038932",
      registerNumber: "23BCE0226",
      blockName: "MENS HOSTEL S BLOCK ",
      roomNo: "423",
      bedType: "4-BED-AC",
      messInfo: "Special Mess - RR-05-J SATHYA F.R. FOOD AND HOSPITALITY SERVICES (P BLOCK)",
    },
    proctorInfo: {
      facultyId: "20056",
      facultyName: "TANU KUKREJA",
      designation: "Assistant Professor Sr. Grade",
      school: "School of Social Sciences & Languages",
      cabin: "609-E",
      department: "Department of Social Science",
      email: "tanu.kukreja@vit.ac.in",
      intercom: "",
      mobile: "9810554544",
    },
    familyInfo: {
      brothers: "1",
      sisters: "0",
      brotherStudyingInVIT: "NO",
      brotherStudiedInVIT: "YES",
      studiedDetails: "17BCE0361",
      fatherName: "SHISHIR KUMAR SRIVASTAVA",
      fatherQualification: "B.SC DIPLOMA IN ENGINEERING",
      occupation: "GOVT",
      organization: "UTTAR PRADESH STATE GOVERNMENT",
      mobile: "8354040444",
      email: "sks1r2022@gmail.com",
      annualIncome: "100001 TO 200000",
      address: "BLOCK DEVELOPMENT OFFICE,SAHJANWA, GORAKHPUR",
    },

  }

  useEffect(() => {
    const updateRoomNumber = () => {
      const today = new Date()
      const dayOfWeek = today.getDay() // 0 is Sunday, 1 is Monday, etc.
      const roomNumbers = ["1224", "224", "324", "424", "924", "1024", "1124"]
      setCurrentRoomNo(roomNumbers[dayOfWeek])
    }

    updateRoomNumber()
    // Update room number every day at midnight
    const timer = setInterval(updateRoomNumber, 24 * 60 * 60 * 1000)

    return () => clearInterval(timer)
  }, [])



  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="grid grid-cols-[40%_60%] border-b border-gray-200 last:border-0">
      <div className="p-2 text-sm font-medium bg-gray-50">{label}</div>
      <div className="p-2 text-sm">{value || "-"}</div>
    </div>
  )

  const AccordionButton = ({
    title,
    isActive,
    onClick,
  }: {
    title: string
    isActive: boolean
    onClick: () => void
  }) => (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-[#1E4B87] to-[#003366] text-white p-3 rounded flex items-center gap-3 shadow-sm hover:from-[#003366] hover:to-[#1E4B87] transition-all"
    >
      <div className="w-6 h-6 bg-[#FFD700] rounded flex items-center justify-center">
        <span className="text-[#003366] text-xs">🔑</span>
      </div>
      <span className="font-medium text-sm flex-1 text-left">{title}</span>
      <ChevronDown className={`w-5 h-5 transition-transform ${isActive ? "rotate-180" : ""}`} />
    </button>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#003B6F] text-white px-2 py-1.5 flex items-center justify-between border-b border-blue-400 sticky top-0 z-10">
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
        {/* Student Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src={img_url}
              alt="Student"
              className="w-24 h-24 rounded-lg object-cover mx-auto sm:mx-0"
            />
            <div className="flex-1">
              <div className="mb-1">
                <div className="text-[#FF0000] text-sm font-medium">REGISTER NUMBER: {studentInfo.registerNumber}</div>
                <div className="text-sm font-medium">VIT EMAIL:</div>
                <div className="text-sm">{studentInfo.email}</div>
              </div>
              <div className="mb-1">
                <div className="text-[#FF0000] text-sm font-medium">PROGRAM & BRANCH:</div>
                <div className="text-sm">{studentInfo.program}</div>
              </div>
              <div>
                <div className="text-[#FF0000] text-sm font-medium">SCHOOL NAME:</div>
                <div className="text-sm">{studentInfo.school}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-2">
          {/* Personal Information */}
          <div>
            <AccordionButton
              title="PERSONAL INFORMATION"
              isActive={activeSection === "personal"}
              onClick={() => setActiveSection(activeSection === "personal" ? null : "personal")}
            />
            {activeSection === "personal" && (
              <div className="mt-1 bg-white rounded shadow-sm">
                <InfoRow label="Register Number" value={studentInfo.registerNumber} />
                <InfoRow label="Name" value={studentInfo.name} />
                <InfoRow label="Email" value={studentInfo.email} />
              </div>
            )}
          </div>

          {/* Hostel Information */}
          <div>
            <AccordionButton
              title="HOSTEL INFORMATION"
              isActive={activeSection === "hostel"}
              onClick={() => setActiveSection(activeSection === "hostel" ? null : "hostel")}
            />
            {activeSection === "hostel" && (
      <div className="mt-1 bg-white rounded shadow-sm">
        <InfoRow label="Application Number" value={studentInfo.hostelInfo.applicationNumber} />
        <InfoRow label="Register Number" value={studentInfo.hostelInfo.registerNumber} />
        <InfoRow label="Block Name" value={studentInfo.hostelInfo.blockName} />
        <InfoRow label="Room No." value={currentRoomNo} />
        <InfoRow label="Bed Type" value={studentInfo.hostelInfo.bedType} />
        <InfoRow label="Mess Information" value={studentInfo.hostelInfo.messInfo} />
      </div>
    )
}
          </div>

          {/* Proctor Information */}
          <div>
            <AccordionButton
              title="PROCTOR INFORMATION"
              isActive={activeSection === "proctor"}
              onClick={() => setActiveSection(activeSection === "proctor" ? null : "proctor")}
            />
            {activeSection === "proctor" && (
              <div className="mt-1 bg-white rounded shadow-sm">
                <InfoRow label="FACULTY ID" value={studentInfo.proctorInfo.facultyId} />
                <InfoRow label="FACULTY NAME" value={studentInfo.proctorInfo.facultyName} />
                <InfoRow label="FACULTY DESIGNATION" value={studentInfo.proctorInfo.designation} />
                <InfoRow label="SCHOOL" value={studentInfo.proctorInfo.school} />
                <InfoRow label="CABIN" value={studentInfo.proctorInfo.cabin} />
                <InfoRow label="FACULTY DEPARTMENT" value={studentInfo.proctorInfo.department} />
                <InfoRow label="FACULTY EMAIL" value={studentInfo.proctorInfo.email} />
                <InfoRow label="FACULTY MOBILE NUMBER" value={studentInfo.proctorInfo.mobile} />
              </div>
            )}
          </div>

          {/* Family Information */}
          <div>
            <AccordionButton
              title="FAMILY INFORMATION"
              isActive={activeSection === "family"}
              onClick={() => setActiveSection(activeSection === "family" ? null : "family")}
            />
            {activeSection === "family" && (
              <div className="mt-1 bg-white rounded shadow-sm">
                <InfoRow label="NO. OF BROTHERS" value={studentInfo.familyInfo.brothers} />
                <InfoRow label="NO. OF SISTERS" value={studentInfo.familyInfo.sisters} />
                <InfoRow
                  label="IF BROTHER/SISTER STUDYING IN VIT"
                  value={studentInfo.familyInfo.brotherStudyingInVIT}
                />
                <InfoRow label="IF BROTHER/SISTER STUDIED IN VIT" value={studentInfo.familyInfo.brotherStudiedInVIT} />
                <InfoRow label="STUDIED DETAILS" value={studentInfo.familyInfo.studiedDetails} />
                <div className="bg-[#003B6F] text-white p-2 text-sm font-medium">FATHER DETAILS</div>
                <InfoRow label="FATHER NAME" value={studentInfo.familyInfo.fatherName} />
                <InfoRow label="QUALIFICATION" value={studentInfo.familyInfo.fatherQualification} />
                <InfoRow label="OCCUPATION" value={studentInfo.familyInfo.occupation} />
                <InfoRow label="ORGANIZATION" value={studentInfo.familyInfo.organization} />
                <InfoRow label="MOBILE NUMBER" value={studentInfo.familyInfo.mobile} />
                <InfoRow label="EMAIL" value={studentInfo.familyInfo.email} />
                <InfoRow label="ANNUAL INCOME" value={studentInfo.familyInfo.annualIncome} />
                <InfoRow label="OFFICIAL ADDRESS" value={studentInfo.familyInfo.address} />
              </div>
            )}
          </div>

          {/* Educational Information */}
          <div>
            <AccordionButton
              title="EDUCATIONAL INFORMATION"
              isActive={activeSection === "education"}
              onClick={() => setActiveSection(activeSection === "education" ? null : "education")}
            />
            {activeSection === "education" && (
              <div className="mt-1 bg-white rounded shadow-sm">
                <InfoRow label="Program" value={studentInfo.program} />
                <InfoRow label="School" value={studentInfo.school} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

