const fs = require('fs');
let c = fs.readFileSync('src/components/site/Rooms.tsx', 'utf8');

c = c.replace(
  /<div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-3 mb-6 pb-2 -mx-6 px-6 lg:mx-0 lg:px-0">/,
  '<div className="flex md:grid overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none md:grid-cols-2 gap-3 md:gap-2 mb-6 md:mb-5 pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 lg:mx-0 lg:px-0">'
);

c = c.replace(
  /className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-muted\/40 border border-border\/50 min-w-\[80px\] snap-center flex-shrink-0 text-center"/g,
  'className="flex flex-col md:flex-row items-center md:justify-start justify-center gap-2 md:gap-2 p-3 md:p-0 rounded-2xl md:rounded-none bg-muted/40 md:bg-transparent border border-border/50 md:border-none min-w-[80px] md:min-w-0 snap-center md:snap-none flex-shrink-0 text-center md:text-left"'
);

c = c.replace(
  /<span className="text-\[10px\] leading-tight text-muted-foreground font-medium">{f.label}<\/span>/g,
  '<span className="text-[10px] md:text-sm leading-tight md:leading-normal text-muted-foreground font-medium md:font-normal">{f.label}</span>'
);

c = c.replace(
  /<f.icon className="h-5 w-5 text-secondary" \/>/g,
  '<f.icon className="h-5 w-5 md:h-4 md:w-4 text-secondary flex-shrink-0" />'
);

fs.writeFileSync('src/components/site/Rooms.tsx', c);
