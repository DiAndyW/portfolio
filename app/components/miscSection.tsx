import React, { useState } from "react";
import rainImage from "../../assets/rain.jpg";

interface BaseCard {
    id: number;
    type: 'text' | 'image';
    backContent: {
        title: string;
        facts: string[];
    };
}

interface TextCard extends BaseCard {
    type: 'text';
    title: string;
    frontImage: string;
    frontText: string;
}

interface ImageCard extends BaseCard {
    type: 'image';
    frontImage: string;
    isLocalImage?: boolean; 
}

type CardContent = TextCard | ImageCard;

const MiscSection: React.FC = () => {
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

    const toggleCard = (cardId: number): void => {
        const newFlippedCards = new Set(flippedCards);
        if (newFlippedCards.has(cardId)) {
            newFlippedCards.delete(cardId);
        } else {
            newFlippedCards.add(cardId);
        }
        setFlippedCards(newFlippedCards);
    };

    const Content: CardContent[] = [
        {
            id: 1,
            type: 'text',
            title: "The number of cats I've had",
            frontImage: "5",
            frontText: "",
            backContent: {
                title: "",
                facts: [
                    "Aurora (Orange)",
                    "Sunny (Orange) + Luna (Calico) (Siblings)",
                    "Emma (Orange) (I looked after her for a friend)",
                    "Cinder (Gray) (Short for Cinderella)"
                ]
            }
        },
        {
            id: 2,
            type: 'image',
            frontImage: "../../assets/rain.jpg", 
            isLocalImage: true,
            backContent: {
                title: "Post Rain at UCLA",
                facts: [
                    "I love rain",
                    "Thanks for reading"
                ]
            }
        },
        {
            id: 3,
            type: 'text',
            title: "What's been on repeat",
            frontImage: "🎵",
            frontText: "",
            backContent: {
                title: "Can't get 'em out of my head!",
                facts: [
                    "Laufey - Silver Lining",
                    "keshi - WANTCHU",
                    "d4vd - Sleep Well",
                    "HUNTR/X - Golden"
                ]
            }
        }
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="mt-8 font-normal">
                <h1 className="text-5xl p-4 text-white">
                    Misc
                </h1>
                <h2 className="p-4 text-white mb-8">
                    Here are some random snippets or facts from my life!
                </h2>

                <div className="flex flex-wrap gap-6 justify-center">
                    {Content.map((item) => (
                        <div 
                            key={item.id} 
                            style={{ perspective: '1000px' }}
                        >
                            <div 
                                className={`relative w-64 h-80 cursor-pointer transition-transform duration-700`}
                                onClick={() => toggleCard(item.id)}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: flippedCards.has(item.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                }}
                            >
                                {/* Front of card */}
                                <div 
                                    className="absolute inset-0 w-full h-full rounded-lg border border-white/20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-200"
                                    style={{
                                        backfaceVisibility: 'hidden'
                                    }}
                                >
                                    {item.type === 'text' ? (
                                        // Text card front
                                        <>
                                            <div className="text-6xl mb-4">
                                                {item.frontImage}
                                            </div>
                                            <h3 className="text-xl font-bold text-white text-center mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/80 text-center">
                                                {item.frontText}
                                            </p>
                                            <div className="absolute bottom-4 text-white/60 text-sm">
                                                →
                                            </div>
                                        </>
                                    ) : (
                                        // Image card front - fills entire card
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {item.isLocalImage ? (
                                                <img 
                                                    src={item.frontImage} 
                                                    alt="Card image"
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            ) : (
                                                <div className="text-[12rem] leading-none">
                                                    {item.frontImage}
                                                </div>
                                            )}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm bg-black/50 px-2 py-1 rounded">
                                                →
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Back of card */}
                                <div 
                                    className="absolute inset-0 w-full h-full rounded-lg border border-white/20 backdrop-blur-sm p-6 flex flex-col justify-center"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                >
                                    <h3 className="text-xl font-bold text-white text-center mb-6">
                                        {item.backContent.title}
                                    </h3>
                                    <div className="space-y-3">
                                        {item.backContent.facts.map((fact, index) => (
                                            <div key={index} className="text-white flex items-start">
                                                <span className="mr-2">•</span>
                                                <span className="text-sm">{fact}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
                                        ←
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MiscSection;