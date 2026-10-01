import Button from "../ui/Button"

function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="text-xl font-bold text-green-700">
          DalatTour
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-gray-700 hover:text-green-600">
            Trang chủ
          </a>

          <a href="#" className="text-gray-700 hover:text-green-600">
            Địa điểm
          </a>

          <a href="#" className="text-gray-700 hover:text-green-600">
            Tư vấn AI
          </a>

          <a href="#" className="text-gray-700 hover:text-green-600">
            Về chúng tôi
          </a>
        </nav>

        <Button>
          Đăng nhập
        </Button>

      </div>
    </header>
  )
}

export default Navbar