import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { Globe } from "./ui/globe";
import { GlobeDemo } from "./Globe";
import { useTranslation } from "react-i18next";

interface FormValues {
  username: string;
  email: string;
  Entity: string;
  Message: string;
}

const ContactForm = () => {
  const { t } = useTranslation("contact"); // use same or relevant namespace
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const pageVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariant}
      className="w-full py-20 lg:py-32"
    >
      <div className="container mx-auto p-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="mx-full flex flex-col gap-10">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-4">
                <div>
                  <Badge variant="outline" className="text-zinc-700 ">
                    {t("reachUs")}
                  </Badge>
                </div>

                <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
                  {t("speakWithOurTeam")}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {t("improveServices")}
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="flex flex-col justify-center items-center">
                  <p className="mb-2 text-lg font-semibold">{t("emailUs")}</p>
                  <a href="mailto:Info@dpa.gov.so" className="hover:underline">
                    Info@dpa.gov.so
                  </a>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="mb-2 text-lg font-semibold">{t("visitUs")}</p>
                  <a href="#" className=" hover:underline">
                    {t("addressLine")}
                  </a>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="mb-2 text-lg font-semibold">{t("callUs")}</p>
                  <a href="tel:+452" className="hover:underline">
                    +452
                  </a>
                </div>
              </div>
            </div>
            <div>
              <GlobeDemo />
            </div>
          </div>

          <section className="mx-full border border-gray-300/60 rounded-lg p-6">
            <Form {...form}>
              <form className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  rules={{
                    required: t("usernameRequired"),
                    minLength: {
                      value: 2,
                      message: t("usernameMinLength"),
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("username")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("usernamePlaceholder")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: t("emailRequired"),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t("invalidEmail"),
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("email")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("emailPlaceholder")}
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Entity"
                  rules={{
                    required: t("companyRequired"),
                    minLength: {
                      value: 2,
                      message: t("companyMinLength"),
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("company")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("companyPlaceholder")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Message"
                  rules={{
                    required: t("messageRequired"),
                    minLength: {
                      value: 2,
                      message: t("messageMinLength"),
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("messagePlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button size="lg" type="submit">
                  {t("submit")}
                </Button>
              </form>
            </Form>
          </section>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
