import { Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "./ui/badge";

const Cta = () => {
  return (
    <section className="w-full py-20 lg:py-30">
      <div className="container mx-auto p-8 ">
        <div className="flex flex-col justify-center items-center space-y-4 mb-12">
          <div>
            <Badge variant="outline" className="text-zinc-700 ">
              Reach Us
            </Badge>
          </div>

          <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
            Speak with Our Friendly Team
          </h1>
          <p className="text-lg text-muted-foreground">
            We&apos;d love to assist you. Fill out the form or drop us an email.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="flex flex-col justify-center items-center">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Email Us</p>
            <p className="mb-3 text-muted-foreground">
              Our team is ready to assist.
            </p>
            <a href="#" className="font-semibold hover:underline">
              abc@example.com
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Visit Us</p>
            <p className="mb-3 text-muted-foreground">
              Drop by our office for a chat.
            </p>
            <a href="#" className="font-semibold hover:underline">
              1234 Street Name, City Name
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold"> Call Us</p>
            <p className="mb-3 text-muted-foreground">
              We&apos;re available Mon-Fri, 9am-5pm.
            </p>
            <a href="#" className="font-semibold hover:underline">
              +123 456 7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
