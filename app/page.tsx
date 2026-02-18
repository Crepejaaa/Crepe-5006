import { Button } from "@/components/ui/button";
import { Coffee, Leaf, Bean, Clock, MapPin, User } from "lucide-react"; // เพิ่ม User icon

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFBF7] font-sans text-[#4A3F35]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 flex w-full max-w-3xl justify-between items-center p-6 z-10 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#F5F5F5]">
        <span className="text-xl font-bold tracking-tighter text-[#8C7851] flex items-center gap-2">
          <Coffee size={20} /> OAK & BEAN
        </span>
        <div className="flex items-center gap-6">
          <div className="hidden space-x-4 text-sm font-medium sm:block">
            <a href="#" className="hover:text-[#8C7851]">Menu</a>
            <a href="#" className="hover:text-[#8C7851]">About</a>
          </div>
          {/* เพิ่มปุ่ม Login */}
          <Button variant="ghost" className="text-sm font-medium text-[#4A3F35] hover:text-[#8C7851] flex gap-2">
            <User size={16} /> Login
          </Button>
        </div>
      </nav>

      <main className="flex min-h-screen w-full max-w-3xl flex-col bg-white shadow-sm sm:items-start pt-20">
        
        {/* Hero Section */}
        <section className="w-full bg-[#F9F7F2] py-20 px-12 flex flex-col items-center text-center sm:items-start sm:text-left">
          <div className="mb-6 rounded-full bg-[#EFEBE9] p-4 text-[#8C7851]">
            <Bean size={40} />
          </div>
          <h1 className="text-4xl font-serif font-bold text-[#5D4037] leading-tight">
            Crafting Moments <br/>One Cup at a Time
          </h1>
          <p className="mt-4 max-w-md text-sm text-zinc-500">
            สัมผัสสุนทรียภาพแห่งการดื่มกาแฟในบรรยากาศเอิร์ธโทนที่อบอุ่น 
            คัดสรรเมล็ดพันธุ์คุณภาพเพื่อแก้วพิเศษของคุณ
          </p>
        </section>

        {/* Content Section */}
        <div className="w-full p-8 sm:p-12">
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#5D4037]">Category</h2>
              <div className="h-1 w-12 bg-[#D7CCC8]"></div>
            </div>

            {/* Drink Categories Grid */}
            <div className="grid grid-cols-1 gap-6">
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Category 1: Espresso Based */}
                <div className="flex items-start gap-4 rounded-xl border border-[#F5F5F5] p-5 hover:bg-[#FDFBF7] transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFEBE9] text-[#8C7851]">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#5D4037]">Espresso Based</h3>
                    <p className="text-xs text-zinc-500 mt-1">ลาเต้, คาปูชิโน่ และเมนูคลาสสิกจากเครื่องชงแรงดันสูง</p>
                  </div>
                </div>

                {/* Category 2: Slow Bar / Tea */}
                <div className="flex items-start gap-4 rounded-xl border border-[#F5F5F5] p-5 hover:bg-[#FDFBF7] transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8EDEA] text-[#606C5D]">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#5D4037]">Slow Bar & Tea</h3>
                    <p className="text-xs text-zinc-500 mt-1">กาแฟดริป และชาออร์แกนิกที่คัดสรรมาอย่างพิถีพิถัน</p>
                  </div>
                </div>
              </div>

              {/* เพิ่ม Category 3: Selected Beans ตามที่ขอ */}
              <div className="flex items-start gap-4 rounded-xl border border-[#F5F5F5] p-5 hover:bg-[#FDFBF7] transition-colors w-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2EDE4] text-[#A67C52]">
                  <Bean size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#5D4037]">Selected Beans</h3>
                  <p className="text-xs text-zinc-500 mt-1">เมล็ดกาแฟคั่วบดคุณภาพเยี่ยมสำหรับคอกาแฟตัวจริง คัดสรรจากแหล่งปลูกที่ดีที่สุด</p>
                </div>
              </div>

            </div>

            {/* Action Buttons - เพิ่มปุ่มสั่งซื้อทันที */}
            <div className="mt-4 flex flex-col gap-4 border-t border-zinc-100 pt-8 sm:flex-row">
              <Button className="bg-[#8C7851] text-white hover:bg-[#6F5F40] px-10 shadow-md py-6 text-base font-semibold">
                สั่งซื้อทันที (Order Now)
              </Button>
              <Button variant="outline" className="border-[#D7CCC8] text-[#5D4037] hover:bg-[#FDFBF7] py-6">
                ดูเมนูทั้งหมด
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="w-full bg-[#F9F7F2] p-8 mt-auto border-t border-[#F1EEE9]">
          <div className="flex flex-col items-center justify-between gap-4 text-[11px] uppercase tracking-widest text-zinc-400 sm:flex-row">
            <div className="flex items-center gap-2">
              <Clock size={14} /> Open Daily: 08:00 - 18:00
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} /> Sukhumvit, Bangkok
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}