import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ServiceCard({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <Card className={cn("card-hover")}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-electric-500/20 p-2 text-electric-300">
            {icon}
          </div>
          <div className="text-white font-medium">{title}</div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}
