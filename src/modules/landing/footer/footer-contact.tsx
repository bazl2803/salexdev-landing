import { LucideMail } from "lucide-react";
import { FooterContactItem } from "./footer-contact-item";

export const FooterContact = () => {
  return (
    <>
      <div id="contact">
        <h3 className="mb-4 text-lg font-semibold text-white">Contáctanos</h3>

        <div className="flex flex-col gap-2 text-sm text-gray-400">
          <FooterContactItem
            iconName="map-pin"
            description="Condominios Los Héroes, San Salvador, El Salvador"
            href="https://www.google.com/maps/search/?api=1&query=Condominios+Los+H%C3%A9roes%2C+San+Salvador%2C+El+Salvador"
          />

          <FooterContactItem
            iconName="phone"
            description="+503 7018 1141"
            href="tel:+50370181141"
          />

          <FooterContactItem
            iconName="mail"
            description="info@salex.sv"
            href="mailto:info@salex.com"
          />

          <FooterContactItem
            iconName="clock"
            description={`Lun - Vie 9:00 - 17:00 \nSab 9:00 - 13:00`}
            href="#"
          />
        </div>
      </div>
    </>
  );
};
