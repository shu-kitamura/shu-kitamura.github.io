import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AboutCardProps = {
  title: string;
  body: string;
};

export function AboutCard({ title, body }: AboutCardProps) {
  return (
    <Card className="w-full h-full border-none shadow-md hover:shadow-lg/20 transition hover:-translate-y-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
