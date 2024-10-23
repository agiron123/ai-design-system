import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface ColorPaletteProps {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  onChange: (theme: any) => void;
}

function ColorSwatch({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <div
      className={cn(
        'w-10 h-10 rounded-md border cursor-pointer transition-transform hover:scale-105 active:scale-95',
        color.includes('background') && 'ring-1 ring-border'
      )}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
}

function HSLToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToHSL(hex: string): { h: number; s: number; l: number } {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }
  
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export default function ColorPalette({ theme, onChange }: ColorPaletteProps) {
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [hsl, setHSL] = useState({ h: 0, s: 50, l: 50 });

  const updateColor = (key: string, value: string) => {
    onChange({ ...theme, [key]: value });
  };

  const handleHSLChange = (key: 'h' | 's' | 'l', value: number) => {
    const newHSL = { ...hsl, [key]: value };
    setHSL(newHSL);
    if (activeColor) {
      updateColor(activeColor, `hsl(${newHSL.h}, ${newHSL.s}%, ${newHSL.l}%)`);
    }
  };

  const handleColorClick = (key: string, value: string) => {
    setActiveColor(key);
    // Parse the current HSL values
    if (value.startsWith('hsl')) {
      const matches = value.match(/\d+/g);
      if (matches) {
        setHSL({
          h: parseInt(matches[0]),
          s: parseInt(matches[1]),
          l: parseInt(matches[2]),
        });
      }
    }
  };

  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">Brand Colors</h2>
        <div className="grid gap-4">
          {Object.entries(theme).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <Label className="capitalize">{key}</Label>
              <div className="flex items-center gap-4">
                <Popover>
                  <PopoverTrigger>
                    <ColorSwatch
                      color={value}
                      onClick={() => handleColorClick(key, value)}
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div
                        className="h-40 rounded-md"
                        style={{
                          backgroundColor: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
                        }}
                      />
                      <div className="grid gap-2">
                        <Label>Hue</Label>
                        <Slider
                          value={[hsl.h]}
                          max={360}
                          step={1}
                          onValueChange={([value]) =>
                            handleHSLChange('h', value)
                          }
                        />
                        <Label>Saturation</Label>
                        <Slider
                          value={[hsl.s]}
                          max={100}
                          step={1}
                          onValueChange={([value]) =>
                            handleHSLChange('s', value)
                          }
                        />
                        <Label>Lightness</Label>
                        <Slider
                          value={[hsl.l]}
                          max={100}
                          step={1}
                          onValueChange={([value]) =>
                            handleHSLChange('l', value)
                          }
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <Input
                  value={value}
                  onChange={(e) => updateColor(key, e.target.value)}
                  className="font-mono"
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">Color Harmonies</h2>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label>Saturation</Label>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label>Brightness</Label>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}