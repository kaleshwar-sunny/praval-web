import Link from "next/link";

export default function StatCards({ isMobile }) {
    const stats = [
        {
            value: "62%",
            label: "Fewer failed delivery attempts",
            body: "We lifted first-attempt delivery into best-in-class territory.",
            link: "/case-studies/gen-ai",
            image: "/images/imagesCaseStudyHomePage/Retail.png",
        },
        {
            value: "5 hrs",
            label: "Per person, per week",
            body: "They rolled it out to save time. It kept guessing wrong.",
            link: "/case-studies/microsoftCopilot",
            image: "/images/imagesCaseStudyHomePage/Microsoft Copilot.svg",
        },
        {
            value: "2.4 pts",
            label: "Gross margin recovered",
            body: "Sales were up. Margin was leaking.",
            link: "/case-studies/retail",
            image: "/images/imagesCaseStudyHomePage/Retail.png",
        },
        {
            value: "40%",
            label: "Fewer stockouts",
            body: "The shelves were empty. The warehouse was full.",
            link: "/case-studies/fcmg",
            image: "/images/latestInsights3.png",
        },
    ];

    return (
            <div
                style={{
                    display: "grid",
                    // gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                    gap: 15,
                    width: "100%",
                }}
            >
                {stats.map((stat, index) => (
                    <Link
                        key={index}
                        href={stat.link}
                        style={{
                            position: "relative",
                            width: "100%",
                            aspectRatio: "628 / 405",
                            borderRadius: 15,
                            overflow: "hidden",
                            boxShadow: "0px 30px 70px rgba(0,0,0,.18)",
                        }}
                    >
                        {/* Background */}
                        <img src={stat.image} style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        />

                        {/* Overlay */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(90deg, rgba(0,0,0,.15), rgba(0,0,0,.05))",
                            }}
                        />

                        {/* Glass Panel */}
                        <div
                            style={{
                                position: "absolute",
                                left: 8,
                                top: 8,
                                bottom: 18,
                                // width: "50%",
                                // minWidth: 180,
                                // maxWidth: 280,
                                width: isMobile ? "85%" : "50%",
                                maxWidth: isMobile ? "none" : 280,
                                borderRadius: 15,
                                overflow: "hidden",
                                background: "rgba(255,255,255,.25)",
                                backdropFilter: "blur(34px)",
                                border: "1px solid rgba(255,255,255,.28)",
                                // padding: 24,
                                padding: isMobile ? 12 : 24,
                                // margin: 5,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontSize: "clamp(24px, 3vw, 56px)",                                   
                                        fontWeight: 500,
                                        color: "#1D2833",
                                        marginBottom: 8,
                                    }}
                                >
                                    {stat.value}
                                </div>

                                <div
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 600,
                                        marginBottom: 12,
                                        color: "#1D2833",
                                    }}
                                >
                                    {stat.label}
                                </div>

                                <p
                                    style={{
                                        fontSize: "clamp(12px, 3vw, 18px)",
                                        fontWeight: 600,
                                        lineHeight: 1.6,
                                        color: "#1D2833",
                                        marginBottom: 16,
                                    }}
                                >
                                    {stat.body}
                                </p>
                            </div>
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    cursor: "pointer",
                                }}
                            >
                                <div
                                    style={{
                                        width: "35px",
                                        height: "35px",
                                        backgroundColor: "#0F72B1",
                                        borderRadius: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        fontSize: "15px",
                                    }}
                                >
                                    ❯
                                </div>

                                <span
                                    style={{
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        color: "#1D2833",
                                    }}
                                >
                                    Read More
                                </span>
                            </div>
                        </div>
                    </Link>
                ))
                }
            </div >
    );
}