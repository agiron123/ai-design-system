import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Paintbrush, Palette, Box, Wand2, Download } from 'lucide-react';
import ThemePreview from '@/components/ThemePreview';
import ColorPalette from '@/components/ColorPalette';
import ComponentGallery from '@/components/ComponentGallery';
import AIRecommendations from '@/components/AIRecommendations';

function App() {
  const [activeTheme, setActiveTheme] = useState({
    primary: 'hsl(220 70% 50%)',
    secondary: 'hsl(280 65% 60%)',
    accent: 'hsl(160 60% 45%)',
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(0 0% 3.9%)',
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center h-16 px-4 mx-auto">
          <Wand2 className="w-6 h-6 mr-2" />
          <h1 className="text-xl font-bold">Design System AI</h1>
          <div className="flex items-center ml-auto space-x-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Theme
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-6 mx-auto">
        <Tabs defaultValue="palette" className="space-y-4">
          <TabsList>
            <TabsTrigger value="palette">
              <Palette className="w-4 h-4 mr-2" />
              Color Palette
            </TabsTrigger>
            <TabsTrigger value="components">
              <Box className="w-4 h-4 mr-2" />
              Components
            </TabsTrigger>
            <TabsTrigger value="preview">
              <Paintbrush className="w-4 h-4 mr-2" />
              Preview
            </TabsTrigger>
          </TabsList>

          <div className="grid gap-6 md:grid-cols-[1fr,300px]">
            <TabsContent value="palette" className="m-0">
              <ColorPalette theme={activeTheme} onChange={setActiveTheme} />
            </TabsContent>

            <TabsContent value="components" className="m-0">
              <ComponentGallery theme={activeTheme} />
            </TabsContent>

            <TabsContent value="preview" className="m-0">
              <ThemePreview theme={activeTheme} />
            </TabsContent>

            <Card className="p-4">
              <AIRecommendations theme={activeTheme} onApply={setActiveTheme} />
            </Card>
          </div>
        </Tabs>
      </main>
    </div>
  );
}

export default App;