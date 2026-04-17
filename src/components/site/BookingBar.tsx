import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Users, Search, Minus, Plus } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const BookingBar = () => {
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date(2026, 4, 10));
  const [checkOut, setCheckOut] = useState<Date | undefined>(new Date(2026, 4, 11));
  const [guests, setGuests] = useState(2);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container -mt-8 md:-mt-12 relative z-10"
    >
      <div className="bg-card rounded-3xl shadow-elegant border border-border/60 p-3 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-2 items-stretch">
          <DatePickerCell label="Check-In" date={checkIn} onSelect={setCheckIn} />
          <DatePickerCell label="Check-Out" date={checkOut} onSelect={setCheckOut} />
          <GuestsCell guests={guests} setGuests={setGuests} />
          <Button size="lg" className="h-14 md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl font-semibold gap-2 shadow-soft hover:shadow-glow transition-all">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

const DatePickerCell = ({
  label, date, onSelect,
}: { label: string; date: Date | undefined; onSelect: (d: Date | undefined) => void }) => (
  <Popover>
    <PopoverTrigger asChild>
      <button className={cn(
        "flex items-center gap-3 px-4 h-14 rounded-2xl bg-muted/50 hover:bg-muted transition-colors text-left group"
      )}>
        <CalendarIcon className="h-4 w-4 text-accent" />
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{label}</p>
          <p className="text-sm font-semibold truncate">{date ? format(date, "EEE, dd MMM") : "Select date"}</p>
        </div>
      </button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0" align="start">
      <Calendar mode="single" selected={date} onSelect={onSelect} initialFocus className={cn("p-3 pointer-events-auto")} />
    </PopoverContent>
  </Popover>
);

const GuestsCell = ({ guests, setGuests }: { guests: number; setGuests: (n: number) => void }) => (
  <Popover>
    <PopoverTrigger asChild>
      <button className="flex items-center gap-3 px-4 h-14 rounded-2xl bg-muted/50 hover:bg-muted transition-colors text-left">
        <Users className="h-4 w-4 text-accent" />
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Guests</p>
          <p className="text-sm font-semibold">{guests} {guests === 1 ? "Guest" : "Guests"}</p>
        </div>
      </button>
    </PopoverTrigger>
    <PopoverContent className="w-72 p-4" align="start">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Guests</p>
          <p className="text-xs text-muted-foreground">Max 3 (1 extra at cost)</p>
        </div>
        <div className="flex items-center gap-3">
          <Button size="icon" variant="outline" className="h-8 w-8 rounded-full" onClick={() => setGuests(Math.max(1, guests - 1))}>
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-6 text-center font-semibold">{guests}</span>
          <Button size="icon" variant="outline" className="h-8 w-8 rounded-full" onClick={() => setGuests(Math.min(3, guests + 1))}>
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);
