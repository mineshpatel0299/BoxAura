"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "My favorite solution in the market. We work 5x faster with BoxAura.",
    by: "Alex, CEO at TechCorp"
  },
  {
    tempId: 1,
    testimonial: "I'm confident my data is safe with BoxAura. I can't say that about other providers.",
    by: "Dan, CTO at SecureNet"
  },
  {
    tempId: 2,
    testimonial: "I know it's cliche, but we were lost before we found BoxAura. Can't thank you guys enough!",
    by: "Stephanie, COO at InnovateCo"
  },
  {
    tempId: 3,
    testimonial: "BoxAura's products make planning for the future seamless. Can't recommend them enough!",
    by: "Marie, CFO at FuturePlanning"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars, I'd give 12.",
    by: "Andre, Head of Design at CreativeSolutions"
  },
  {
    tempId: 5,
    testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.",
    by: "Jeremy, Product Manager at TimeWise"
  },
  {
    tempId: 6,
    testimonial: "Took some convincing, but now that we're on BoxAura, we're never going back.",
    by: "Pam, Marketing Director at BrandBuilders"
  },
  {
    tempId: 7,
    testimonial: "I would be lost without BoxAura's in-depth analytics. The ROI is EASILY 100X for us.",
    by: "Daniel, Data Scientist at AnalyticsPro"
  },
  {
    tempId: 8,
    testimonial: "It's just the best. Period.",
    by: "Fernando, UX Designer at UserFirst"
  },
  {
    tempId: 9,
    testimonial: "I switched 5 years ago and never looked back.",
    by: "Andy, DevOps Engineer at CloudMasters"
  },
  {
    tempId: 10,
    testimonial: "I've been searching for a solution like BoxAura for YEARS. So glad I finally found one!",
    by: "Pete, Sales Director at RevenueRockets"
  },
  {
    tempId: 11,
    testimonial: "It's so simple and intuitive, we got the team up to speed in 10 minutes.",
    by: "Marina, HR Manager at TalentForge"
  },
  {
    tempId: 12,
    testimonial: "BoxAura's customer support is unparalleled. They're always there when we need them.",
    by: "Olivia, Customer Success Manager at ClientCare"
  },
  {
    tempId: 13,
    testimonial: "The efficiency gains we've seen since implementing BoxAura are off the charts!",
    by: "Raj, Operations Manager at StreamlineSolutions"
  },
  {
    tempId: 14,
    testimonial: "BoxAura has revolutionized how we handle our workflow. It's a game-changer!",
    by: "Lila, Workflow Specialist at ProcessPro"
  },
  {
    tempId: 15,
    testimonial: "The scalability of BoxAura's solution is impressive. It grows with our business seamlessly.",
    by: "Trevor, Scaling Officer at GrowthGurus"
  },
  {
    tempId: 16,
    testimonial: "I appreciate how BoxAura continually innovates. They're always one step ahead.",
    by: "Naomi, Innovation Lead at FutureTech"
  },
  {
    tempId: 17,
    testimonial: "The ROI we've seen with BoxAura is incredible. It's paid for itself many times over.",
    by: "Victor, Finance Analyst at ProfitPeak"
  },
  {
    tempId: 18,
    testimonial: "BoxAura's platform is so robust, yet easy to use. It's the perfect balance.",
    by: "Yuki, Tech Lead at BalancedTech"
  },
  {
    tempId: 19,
    testimonial: "We've tried many solutions, but BoxAura stands out in terms of reliability and performance.",
    by: "Zoe, Performance Manager at ReliableSystems"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-500 ease-in-out flex flex-col justify-center",
        isCenter 
          ? "z-10 bg-white text-stone-800 border-stone-200" 
          : "z-0 bg-stone-50 text-stone-500 border-stone-200/60 hover:border-stone-300"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 30px rgba(0,0,0,0.03)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-stone-200"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 1
        }}
      />
      
      <div className="flex-1 flex items-center justify-center -mt-4">
        <h3 className={cn(
          "text-lg sm:text-xl font-heading font-light leading-relaxed text-center",
          isCenter ? "text-stone-800" : "text-stone-500"
        )}>
          "{testimonial.testimonial}"
        </h3>
      </div>

      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-light text-center",
        isCenter ? "text-stone-400" : "text-stone-300"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-4">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300",
            "bg-white border border-stone-200 text-stone-500 hover:bg-stone-900 hover:text-white hover:border-stone-900 rounded-full shadow-sm",
            "focus-visible:outline-none"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300",
            "bg-white border border-stone-200 text-stone-500 hover:bg-stone-900 hover:text-white hover:border-stone-900 rounded-full shadow-sm",
            "focus-visible:outline-none"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
