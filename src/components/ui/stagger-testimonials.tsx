"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "The box quality was beyond what I imagined. Every guest asked where we got our wedding invites made.",
    by: "Priya Sharma, Delhi"
  },
  {
    tempId: 1,
    testimonial: "Such fine print detailing on the invitation cards. The gold foil work looked absolutely premium.",
    by: "Rohan Malhotra, Gurugram"
  },
  {
    tempId: 2,
    testimonial: "We ordered Diwali gifting boxes for our clients and everyone complimented the design and finish.",
    by: "Anjali Verma, Noida"
  },
  {
    tempId: 3,
    testimonial: "The packaging felt so royal, it made our wedding cards look like a luxury product.",
    by: "Karan Mehta, Jaipur"
  },
  {
    tempId: 4,
    testimonial: "Loved how sturdy the boxes were. Nothing got damaged even after courier to relatives across states.",
    by: "Simran Kaur, Chandigarh"
  },
  {
    tempId: 5,
    testimonial: "The team customised our design exactly the way we wanted. Print quality was crisp and colours were vibrant.",
    by: "Aditya Rao, Mumbai"
  },
  {
    tempId: 6,
    testimonial: "Got our shagun envelopes and invitation box done together. The whole set looked so coordinated.",
    by: "Neha Gupta, Lucknow"
  },
  {
    tempId: 7,
    testimonial: "Best decision for our wedding invites. The embossing and print work was flawless.",
    by: "Vikram Singh, Delhi"
  },
  {
    tempId: 8,
    testimonial: "Beautiful boxes, beautiful prints. Truly premium quality for the price.",
    by: "Pooja Nair, Bengaluru"
  },
  {
    tempId: 9,
    testimonial: "We ordered in bulk for a corporate Diwali hamper and the finishing was consistent on every single box.",
    by: "Arjun Kapoor, Pune"
  },
  {
    tempId: 10,
    testimonial: "I was searching for a box maker who understood Indian wedding themes properly. BoxAura nailed it.",
    by: "Ritu Agarwal, Kanpur"
  },
  {
    tempId: 11,
    testimonial: "The design team suggested a layout that made our card box look far more elegant than what we had in mind.",
    by: "Manish Chawla, Delhi"
  },
  {
    tempId: 12,
    testimonial: "Their support was always available whenever we needed changes in the print proof.",
    by: "Divya Reddy, Hyderabad"
  },
  {
    tempId: 13,
    testimonial: "The colour matching between the box and the card insert was perfect, exactly as per our theme.",
    by: "Sandeep Joshi, Ahmedabad"
  },
  {
    tempId: 14,
    testimonial: "From box texture to card thickness, everything felt premium and well thought out.",
    by: "Kavya Iyer, Chennai"
  },
  {
    tempId: 15,
    testimonial: "The magnetic box closure and the print finish gave our invites a very luxury boutique feel.",
    by: "Rahul Bhatia, Delhi"
  },
  {
    tempId: 16,
    testimonial: "Every relative kept the box after the wedding, that's how good the design and print quality was.",
    by: "Shalini Desai, Surat"
  },
  {
    tempId: 17,
    testimonial: "The turnaround time was quick and the printing was sharp with no colour bleeding at all.",
    by: "Amit Trivedi, Indore"
  },
  {
    tempId: 18,
    testimonial: "We got matching gift boxes and invitation cards, the whole set looked like it came from a premium brand.",
    by: "Meera Pillai, Kochi"
  },
  {
    tempId: 19,
    testimonial: "Handcrafted feel with modern print finishing, exactly what we wanted for our wedding gifting boxes.",
    by: "Nikhil Bansal, Chandigarh"
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
