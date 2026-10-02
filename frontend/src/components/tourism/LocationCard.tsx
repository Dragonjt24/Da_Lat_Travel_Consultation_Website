type LocationCardProps = {
    key: string
    name: string
    image: string
    address: string
    rating: number
}

function LocationCard({
  name,
  image,
  address,
  rating,
}: LocationCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <img
        src={image}
        alt={name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">

        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">
            {name}
          </h3>

          <span className="text-sm text-yellow-500">
            ★ {rating}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          {address}
        </p>

      </div>

    </article>
  )
}

export default LocationCard