import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function TestimonialCard({
  quote,
  author,
  role
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <Card className="card-hover">
      <CardHeader>
        <p className="text-gray-300">&ldquo;{quote}&rdquo;</p>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-400">
          <span className="text-white">{author}</span> — {role}
        </div>
      </CardContent>
    </Card>
  );
}
