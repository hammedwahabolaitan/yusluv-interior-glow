
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar } from '@/components/ui/calendar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  projectType: z.string().min(1, { message: 'Please select a project type' }),
  date: z.date({
    required_error: "Please select a date for your consultation",
  }),
  timeSlot: z.string().min(1, { message: 'Please select a time slot' }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const projectTypes = [
  "Residential - Full Home",
  "Residential - Single Room",
  "Commercial - Office",
  "Commercial - Retail",
  "Commercial - Hospitality",
  "Space Planning",
  "Color Consultation",
  "Other"
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

const Consultation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Book a Consultation - Yusluv Interior';
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // In a real app, you would send this data to your backend or booking service
    toast.success("Consultation request received! We'll confirm your appointment shortly.");
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-yusluv-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Book a Consultation</h1>
              <p className="text-lg text-gray-700">
                Schedule a one-on-one consultation with our expert designers to discuss your project.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-6">
                    <CheckCircle size={64} className="text-green-500" />
                  </div>
                  <h2 className="text-2xl font-serif font-semibold mb-4">Consultation Request Submitted!</h2>
                  <p className="mb-6 text-gray-700">
                    Thank you for booking a consultation with Yusluv Interior. We'll review your request and confirm your appointment via email within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-yusluv-charcoal hover:bg-yusluv-gold transition-colors"
                  >
                    Book Another Consultation
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-serif font-semibold mb-6">Schedule Your Design Consultation</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a project type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {projectTypes.map((type) => (
                                    <SelectItem key={type} value={type}>
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Preferred Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => {
                                      // Disable past dates, Sundays, and dates more than 30 days in the future
                                      const today = new Date();
                                      today.setHours(0, 0, 0, 0);
                                      const thirtyDaysLater = new Date(today);
                                      thirtyDaysLater.setDate(today.getDate() + 30);
                                      
                                      return (
                                        date < today || 
                                        date > thirtyDaysLater ||
                                        date.getDay() === 0 // Sunday
                                      );
                                    }}
                                    initialFocus
                                    className={cn("p-3 pointer-events-auto")}
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="timeSlot"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Time</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a time slot" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about your project and any specific questions you have" 
                                className="min-h-[100px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-yusluv-charcoal hover:bg-yusluv-gold transition-colors"
                      >
                        Book Consultation
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-yusluv-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yusluv-charcoal text-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold">1</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Initial Consultation</h3>
                <p className="text-gray-700">
                  We'll discuss your vision, needs, budget, and timeline. This helps us understand how we can best serve your project goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yusluv-charcoal text-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold">2</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Design Proposal</h3>
                <p className="text-gray-700">
                  Based on our consultation, we'll create a comprehensive proposal including concept boards, timelines, and investment details.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yusluv-charcoal text-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold">3</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Project Execution</h3>
                <p className="text-gray-700">
                  Once the proposal is approved, we'll begin the exciting process of transforming your space into the environment you've envisioned.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
