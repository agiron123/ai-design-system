import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ThemePreviewProps {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
}

export default function ThemePreview({ theme }: ThemePreviewProps) {
  return (
    <Card className="p-6">
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Welcome to Your Design System</h2>
            <p className="text-lg text-muted-foreground">
              This preview shows how your components and colors work together in a
              real-world context.
            </p>
            <div className="flex gap-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Sign In</h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input type="password" placeholder="Enter your password" />
                </div>
                <Button className="w-full">Sign In</Button>
              </form>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Customizable themes</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Component library</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>AI-powered suggestions</span>
                </li>
              </ul>
            </Card>
          </section>
        </div>
      </ScrollArea>
    </Card>
  );
}