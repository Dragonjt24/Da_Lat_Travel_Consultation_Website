import Button from '../../components/ui/Button'
import LocationCard from '../../components/tourism/LocationCard'

const popularLocations = [
    {
        id: "1",
        name: "Hồ Xuân Hương",
        image: 
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        address: "Đà Lạt, Lâm Đồng",
        rating: 4.8,
    },
    {
    id: "2",
    name: "Thung Lũng Tình Yêu",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    address: "Đà Lạt, Lâm Đồng",
    rating: 4.7,
  },
  {
    id: "3",
    name: "Đồi Chè Cầu Đất",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969",
    address: "Xuân Trường, Đà Lạt",
    rating: 4.9,
  },
]

function HomePage() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="max-w-3xl">

            <p className="mb-4 font-medium text-green-700">
              KHÁM PHÁ ĐÀ LẠT
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
              Tìm kiếm hành trình
              <br />
              phù hợp với bạn
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              Khám phá địa điểm, món ăn và trải nghiệm
              thú vị tại thành phố Đà Lạt.
            </p>

            <div className="mt-8 flex gap-4">
              <Button>
                Khám phá ngay
              </Button>

              <Button>
                Tư vấn AI
              </Button>
            </div>

          </div>

        </div>
      </section>

      {/* Popular Locations */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10">
          <p className="font-medium text-green-600">
            KHÁM PHÁ
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Địa điểm nổi bật
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {popularLocations.map((location) => (
            <LocationCard
              key={location.id}
              name={location.name}
              image={location.image}
              address={location.address}
              rating={location.rating}
            />
          ))}

        </div>

      </section>

    </div>
  )
}

export default HomePage