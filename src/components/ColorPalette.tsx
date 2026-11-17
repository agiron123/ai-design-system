import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import type { DesignTheme } from '@/lib/theme';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface ColorPaletteProps {
  theme: DesignTheme;
  onChange: (theme: DesignTheme) => void;
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

export default function ColorPalette({ theme, onChange }: ColorPaletteProps) {
  const [activeColor, setActiveColor] = useState<keyof DesignTheme | null>(null);
  const [hsl, setHSL] = useState({ h: 0, s: 50, l: 50 });

  const updateColor = (key: keyof DesignTheme, value: string) => {
    onChange({ ...theme, [key]: value });
  };

  const handleHSLChange = (key: 'h' | 's' | 'l', value: number) => {
    const newHSL = { ...hsl, [key]: value };
    setHSL(newHSL);
    if (activeColor) {
      updateColor(activeColor, `hsl(${newHSL.h}, ${newHSL.s}%, ${newHSL.l}%)`);
    }
  };

  const handleColorClick = (key: keyof DesignTheme, value: string) => {
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
          {(Object.keys(theme) as (keyof DesignTheme)[]).map((key) => {
            const value = theme[key];
            return (
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
            );
          })}
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