import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Bell, Check, ChevronsUpDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ComponentGalleryProps {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
}

export default function ComponentGallery({ theme }: ComponentGalleryProps) {
  return (
    <Card className="p-6">
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="grid gap-8">
          <section>
            <h3 className="mb-4 text-lg font-semibold">Buttons & Actions</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link Button</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button disabled>Disabled</Button>
              <Button>
                <Check className="w-4 h-4 mr-2" /> With Icon
              </Button>
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold">Data Display</h3>
            <div className="grid gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
              
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/bolt.png" />
                  <AvatarFallback>BT</AvatarFallback>
                </Avatar>
              </div>

              <Alert>
                <AlertCircle className="w-4 h-4" />
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>
                  This is an example alert message.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold">Form Controls</h3>
            <div className="grid max-w-sm gap-6">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="Enter your email" />
              </div>

              <div className="flex items-center gap-4">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>

              <RadioGroup defaultValue="option-1">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-1" id="option-1" />
                  <Label htmlFor="option-1">Option 1</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-2" id="option-2" />
                  <Label htmlFor="option-2">Option 2</Label>
                </div>
              </RadioGroup>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold">Navigation & Menus</h3>
            <div className="grid gap-4">
              <Tabs defaultValue="tab1" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="tab1">Account</TabsTrigger>
                  <TabsTrigger value="tab2">Settings</TabsTrigger>
                  <TabsTrigger value="tab3">Messages</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Account settings and preferences</TabsContent>
                <TabsContent value="tab2">System configuration options</TabsContent>
                <TabsContent value="tab3">Your message inbox</TabsContent>
              </Tabs>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Options <ChevronsUpDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Notifications</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold">Status & Indicators</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="outline" className="gap-2">
                <Bell className="w-3 h-3" /> Notifications
              </Badge>
              <Badge variant="secondary" className="gap-2">
                <Check className="w-3 h-3" /> Completed
              </Badge>
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          </section>
        </div>
      </ScrollArea>
    </Card>
  );
}