import React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`bg-white shadow rounded-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export function CardHeader({ className = "", children, ...props }: CardHeaderProps) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string
  children: React.ReactNode
}

export function CardTitle({ className = "", children, ...props }: CardTitleProps) {
  return (
    <h3 className={`text-2xl font-bold mb-2 ${className}`} {...props}>
      {children}
    </h3>
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export function CardContent({ className = "", children, ...props }: CardContentProps) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string
  children: React.ReactNode
}

export function CardDescription({ className = "", children, ...props }: CardDescriptionProps) {
  return (
    <p className={`text-gray-500 mb-4 ${className}`} {...props}>
      {children}
    </p>
  )
} 