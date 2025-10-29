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
import { ZoomIn, ExternalLink, Code2, Globe, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  title: string;
  projectType: string; // "Website", "Mobile App", etc.
  description: string;
  tags: readonly string[];
  image?: string;
  images?: readonly string[];
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
  images,
  links,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projectImages = images && images.length > 0 ? images : (image ? [image] : []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
                  <ZoomIn className="h-5 w-5 text-foreground" />
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
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </CardTitle>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              <Code2 className="h-4 w-4" />
              {projectType}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Code2 className="h-6 w-6 text-foreground" />
            {title}
          </DialogTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-foreground/10 text-foreground font-medium">
              {projectType}
            </span>
          </div>
        </DialogHeader>
        
        <div className="flex flex-col space-y-6 pt-2">
          {/* Image Slider */}
          {projectImages.length > 0 && (
            <div className="space-y-4">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src={projectImages[currentImageIndex]}
                  alt={`${title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Navigation Arrows */}
                {projectImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {projectImages.length}
                    </div>
                  </>
                )}
              </div>
              
              {/* Thumbnail Navigation */}
              {projectImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {projectImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={cn(
                        "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all",
                        currentImageIndex === idx
                          ? "border-foreground scale-105"
                          : "border-muted-foreground/20 opacity-60 hover:opacity-100 hover:border-foreground/50"
                      )}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          
          <div>
            <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
              About
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-foreground" />
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {links && links.length > 0 && (
            <div>
              <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-foreground" />
                Links
              </h3>
              <div className="flex flex-row flex-wrap items-start gap-2">
                {links?.map((link, idx) => (
                  <Link href={link?.href} key={idx} target="_blank">
                    <Badge key={idx} className="flex gap-2 px-3 py-1.5 hover:bg-foreground/90 transition-colors cursor-pointer">
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