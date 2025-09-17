export function FriendsSection() {
    const People = [
        {
            id: 1,
            name: "Hannah Gonzalez",
            link: "https://hannahskyg.github.io/",
        },
        {
            id: 2,
            name: "Syrno",
            link: "https://syrno.net/",
        },
        {
            id: 3,
            name: "Homan Qiu",
            link: "https://i-am.fish/",
        },
    ]

    return (
        <div className="flex items-center">
            <div className="mt-8 font-normal">
                <div className="text-3xl sm:text-4xl lg:text-5xl p-2 sm:p-4">
                    Friends
                </div>
                <h2 className="text-white mb-4 mt-4 px-4">
                    A list of other awesome people!
                </h2>

                <div className="px-4">
                    {People.map((item) => (
                        <div
                            key={item.id}
                        >
                            • <a href={item.link} className="underline text-[#AABBCC]">{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}