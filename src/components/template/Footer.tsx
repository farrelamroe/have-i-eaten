import { ButtonSend, Container, dataFooter, Form, H1, H2, Textarea } from "@/components";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function Footer() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        alert(result.message);
      } else {
        console.error("Error: ", result.message);
        alert("Failed to send email: " + result.message);
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      alert("An error occurred while sending email.");
    }
  };

  return (
    <>
      <Container>
        <H1 className="mb-[45px] font-urbanist lg:mb-0">
          Kontak kami melalui email
        </H1>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="mx-auto block w-full">
            <form onSubmit={handleSubmit} method="POST" className="space-y-4">
              <Form
                label="Name:"
                htmlFor="name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isRequired={true}
              />
              <Form
                label="Email:"
                htmlFor="email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isRequired={true}
              />
              <Form
                label="Phone Number:"
                htmlFor="phone"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                isRequired={true}
              />
              <Textarea
                htmlFor="message"
                label="Message:"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                isRequired={true}
              />

              <ButtonSend
                size="xs"
                text="Kirim"
                color="secondary-300"
                className=""
              />
            </form>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src="/image.png" alt="image" width={379} height={379} />
            <H2 className="mt-[64px] font-crimson font-bold text-primary-300">
              Nutrition Hub for Gen Z
            </H2>
            <div className="mt-[40px] flex flex-row gap-x-[8px]">
              {dataFooter.map(({ image, href }, i) => {
                return (
                  <a href={href} key={i}>
                    <Image src={image} alt="image" width={40} height={40} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
