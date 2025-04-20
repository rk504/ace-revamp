import React from "react"

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`bg-white shadow rounded-lg overflow-hidden ${className}`} {...props} />
}

export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-6" {...props} />
}

export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className="text-2xl font-bold mb-2" {...props} />
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-6 pt-0" {...props} />
}

export function CardDescription(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className="text-gray-500 mb-4" {...props} />
} 