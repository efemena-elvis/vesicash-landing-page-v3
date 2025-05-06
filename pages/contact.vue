<template>
  <div>
    <div class="bg-primary/30 py-[80px]">
      <div class="container">
        <div class="space-y-4 text-center">
          <h4 class="text-4xl md:text-6xl font-extrabold font-roobert-bold">
            Contact Support
          </h4>
          <p
            class="text-foreground/70 max-w-[800px] mx-auto text-lg md:text-xl"
          >
            Vesicash's team of professionals are committed to the highest
            standards in regards to the quality of work we offer our customers.
          </p>
        </div>
      </div>
    </div>
    <div class="container py-[60px]">
      <div class="grid md:grid-cols-[2fr,_3fr] gap-10 mt-10 md:px-10">
        <div class="space-y-4">
          <div class="p-6 rounded-2xl bg-accent/90 flex gap-x-4" v-if="false">
            <div
              class="size-16 bg-primary/10 rounded-full grid place-items-center"
            >
              <TelephoneIcon />
            </div>
            <div class="space-y-1">
              <div class="font-semibold font-roobert-semibold">
                Phone number
              </div>
              <div class="text-muted-foreground">+43 567 7890 94</div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-accent/90 flex gap-x-4">
            <div
              class="size-16 bg-primary/10 rounded-full grid place-items-center"
            >
              <MailIcon />
            </div>
            <div class="space-y-1">
              <div class="font-semibold font-roobert-semibold">Email</div>
              <a
                class="text-muted-foreground"
                href="maiilto:support@vesicash.com"
                >support@vesicash.com</a
              >
            </div>
          </div>
        </div>
        <div class="rounded-2xl bg-accent/90 p-6">
          <h4 class="text-3xl font-bold font-roobert-bold mb-6">
            Send us a message
          </h4>
          <form
            class="bg-transparent w-full grid grid-cols-2 gap-6"
            @submit="handleMessageSubmission"
          >
            <div class="space-y-1 col-span-full">
              <label for="fullname" class="form-label">Full name</label>
              <input
                type="text"
                class="input-control"
                placeholder="Enter name"
                id="fullname"
                required
                name="fullname"
              />
            </div>
            <div class="space-y-1">
              <label for="phone" class="form-label">Phone number</label>
              <input
                type="text"
                class="input-control"
                placeholder="Enter phone number"
                id="phone"
                required
                name="phone"
              />
            </div>
            <div class="space-y-1">
              <label for="email" class="form-label">Email address</label>
              <input
                type="text"
                class="input-control"
                placeholder="Enter email"
                id="email"
                required
                name="email"
              />
            </div>
            <div class="space-y-1 col-span-full">
              <label for="message" class="form-label">Message</label>
              <textarea
                class="textarea-control min-h-[150px]"
                placeholder="Enter message"
                id="message"
                required
                name="message"
              />
            </div>
            <div
              class="border p-2 rounded-md text-center col-span-full bg-foreground/80 text-background animate-in slide-in-from-top-1"
              v-if="sent"
            >
              Message Sent. Support will reach out to you as soon as possible
            </div>
            <SharedButton class="col-span-full" :disabled="sending || sent">
              <span v-if="sending">Please wait...</span>
              <span v-else>Send Message</span>
            </SharedButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TelephoneIcon from "@/assets/svgs/telephone.svg";
import MailIcon from "@/assets/svgs/mail.svg";
useSeoMeta({
  title: "Contact Support",
});

const sent = ref(false);
const sending = ref(false);

const handleMessageSubmission = async (event: Event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const [first_name, last_name] = (formData.get("fullname") as string)
    .trim()
    .split(/\s+/);
  const payload = {
    first_name,
    last_name: last_name ?? "_",
    email: formData.get("email"),
    website_url: "https://vesicash.com",
    business_type: "ecommerce",
    country: "Nigeriaa",
    message: formData.get("message"),
  };

  try {
    sending.value = true;
    sent.value = false;
    const response = await $fetch(
      "https://auth-staging.vesicash.com/v2/contact-us",
      { method: "post", body: payload }
    );
    sending.value = false;
    sent.value = true;
    setTimeout(() => {
      sent.value = false;
      form.reset();
    }, 5500);
  } catch (err) {
    sending.value = false;
    sent.value = false;
    console.error({ err });
  }
};
</script>
