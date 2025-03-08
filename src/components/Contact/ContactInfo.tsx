import { Phone, Mail, MapPin, Clock } from "lucide-react"; // Import Lucide React icons

const contactDetails = [
  { id: 1, icon: Phone, text: "+1 302 946 0678" },
  { id: 2, icon: Mail, text: "info@tabedge.com" },
  {
    id: 3,
    icon: MapPin,
    text: "2261 Market Street STE 5926, San Francisco, CA, United State, 94114",
  },
  { id: 4, icon: Clock, text: "Mon - Sat : 9:00 AM - 6:00 PM" },
];

const ContactInfo = () => {
  return (
    <div className="max-w-3xl mx-auto  p-8">
      <ul className="space-y-4 flex flex-col items-center">
        {contactDetails.map(({ id, icon: Icon, text }) => (
          <li key={id} className="flex items-center w-full max-w-sm">
            <div className="bg-blue-500/90 p-2 text-white rounded-full">
              <Icon size={26} className="md:text-2xl lg:text-3xl" />
            </div>
            <span className="ml-4 text-gray-700 dark:text-white/75 font-medium">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;
