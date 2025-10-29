"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function AchievementCard({
  title,
  description,
  dates,
  location,
  links,
}: Props) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-foreground/20 dark:border-l-foreground/30">
      <CardContent className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-foreground/70">
              <Award className="h-5 w-5" />
              <h3 className="font-bold text-lg text-foreground group-hover:text-foreground/80 transition-colors">
                {title}
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              {dates && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{dates}</span>
                </div>
              )}
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}

        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2 pt-2">
            {links?.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank">
                <Badge 
                  key={idx} 
                  title={link.title} 
                  className="flex gap-2 hover:bg-foreground hover:text-background transition-colors cursor-pointer"
                >
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
