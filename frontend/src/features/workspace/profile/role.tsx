import Input from "@/shared/components/ui/input/input";
import Textarea from "@/shared/components/ui/textarea/textarea";
import { H4Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import { ScrollArea } from "@radix-ui/themes";
type RoleProps = {
  roleName: string;
  roleDescription: string;
};

function Role({ roleName, roleDescription }: Readonly<RoleProps>) {
  return (
    <div className="flex flex-col gap-5 shadow-lg border border-foreground/20 bg-foreground/5 p-4 rounded-lg">
      <H4Gradiant>Role</H4Gradiant>
      <div className="flex flex-col gap-2">
        <label htmlFor="role">role name : </label>
        <Input value={roleName || "no role specified"} disabled readOnly />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="role">role description : </label>
        <ScrollArea type="always" scrollbars="both" className="max-h-96 p-4">
          <Textarea
            value={roleDescription || "no role description specified"}
            className="w-full h-full resize-none field-sizing-content"
            disabled
            readOnly
          />
        </ScrollArea>
      </div>
    </div>
  );
}

export default Role;
