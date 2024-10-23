import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Wand2 } from 'lucide-react';

interface AIRecommendationsProps {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  onApply: (theme: any) => void;
}

export default function AIRecommendations({ theme, onApply }: AIRecommendationsProps) {
  const suggestions = [
    {
      name: 'Modern Tech',
      colors: {
        primary: 'hsl(230, 70%, 50%)',
        secondary: 'hsl(290, 65%, 60%)',
        accent: 'hsl(170, 60%, 45%)',
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(230, 20%, 10%)',
      },
    },
    {
      name: 'Nature Inspired',
      colors: {
        primary: 'hsl(150, 60%, 40%)',
        secondary: 'hsl(80, 50%, 45%)',
        accent: 'hsl(200, 65%, 55%)',
        background: 'hsl(60, 20%, 98%)',
        foreground: 'hsl(150, 15%, 15%)',
      },
    },
    {
      name: 'Bold & Creative',
      colors: {
        primary: 'hsl(350, 80%, 55%)',
        secondary: 'hsl(40, 90%, 60%)',
        accent: 'hsl(270, 70%, 50%)',
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(350, 15%, 15%)',
      },
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Wand2 className="w-4 h-4" />
        <h2 className="font-semibold">AI Suggestions</h2>
      </div>

      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="grid gap-4">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.name} className="p-4">
              <h3 className="mb-3 font-medium">{suggestion.name}</h3>
              <div className="flex gap-2 mb-3">
                {Object.values(suggestion.colors).map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => onApply(suggestion.colors)}
              >
                Apply Theme
              </Button>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}