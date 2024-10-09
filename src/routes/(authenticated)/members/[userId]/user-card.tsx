import { component$ } from "@builder.io/qwik";
import { LuCalendar, LuMapPin, LuPencilLine } from "@qwikest/icons/lucide";
import { format } from "date-fns";
import { Button } from "~/components/ui";
import { SITE_NAME } from "~/lib/constatnts";
import { User } from "~/lib/types";
import { getGravatarUrlWithResolution } from "~/lib/utils";

type UserCardProps = {
  user: Pick<User, "id" | "profilePhoto" | "name" | "createdAt" | "email">;
};
export const UserCard = component$(({ user }: UserCardProps) => {
  return (
    <div
      class="relative h-[400px] w-80 rounded bg-cover bg-center"
      style={{
        backgroundImage: `url('${getGravatarUrlWithResolution(user.profilePhoto, 400)}')`,
      }}
    >
      <div class="opacity-1 absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      <div class="absolute right-0 top-0 pr-4 pt-4">
        <Button look={"outline"} size={"sm"}>
          <LuPencilLine class="mr-2" /> Change profile photo
        </Button>
      </div>
      <div class="absolute bottom-0 left-0 right-0 px-6 py-8 text-white">
        <h3 class="text-xl font-bold">{user.name}</h3>
        <div class="mt-2 flex flex-col gap-1 text-sm">
          <span>{user.email}</span>
          <span class="flex items-center gap-1">
            <LuMapPin /> Hyderabad, India
          </span>
          <span class="flex items-center gap-1">
            <LuCalendar /> Joined {SITE_NAME} on{" "}
            {format(user.createdAt, "MMM uuuu")}
          </span>
        </div>
      </div>
    </div>
  );
});
