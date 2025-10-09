"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  projectType: string; // "Website", "Mobile App", etc.
  description: string;
  tags: readonly string[];
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  projectType,
  description,
  tags,
  image,
  links,
  className,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className={cn(
            "flex flex-col overflow-hidden border cursor-pointer hover:shadow-lg transition-all duration-300 ease-out h-full group relative",
            className
          )}
        >
          {image && (
            <div className="relative h-40 w-full overflow-hidden">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background rounded-full p-2 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    <path d="M11 8v6"></path>
                    <path d="M8 11h6"></path>
                  </svg>
                </div>
              </div>
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <CardContent className="flex flex-col flex-grow p-4 space-y-2">
            <CardTitle className="text-lg flex items-center justify-between">
              {title}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </CardTitle>
            <div className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
              {projectType}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col space-y-6 pt-4">
          {image && (
            <div className="relative h-64 w-full overflow-hidden rounded-md">
              <Image
                src={image}
                alt={title}
                width={800}
                height={500}
                className="h-full w-full object-cover object-top"
              />
            </div>
          )}
          
          <Markdown className="prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
            {description}
          </Markdown>
          
          <div>
            <h3 className="text-base font-medium mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-1.5">
              {tags?.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {links && links.length > 0 && (
            <div>
              <h3 className="text-base font-medium mb-2">Links</h3>
              <div className="flex flex-row flex-wrap items-start gap-2">
                {links?.map((link, idx) => (
                  <Link href={link?.href} key={idx} target="_blank">
                    <Badge key={idx} className="flex gap-2 px-2 py-1">
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}