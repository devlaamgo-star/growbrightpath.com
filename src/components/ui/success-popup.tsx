import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, X } from 'lucide-react';

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  actionText?: string;
  onAction?: () => void;
}

export const SuccessPopup: React.FC<SuccessPopupProps> = ({
  isOpen,
  onClose,
  title,
  message,
  actionText,
  onAction
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <Card className="relative w-full max-w-md shadow-2xl border-2 border-primary/20 bg-white animate-in fade-in-0 zoom-in-95 duration-300">
        <CardHeader className="text-center pb-4">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2 h-8 w-8 p-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <CardTitle className="text-2xl font-heading font-bold text-foreground">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center pb-8">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {message}
          </p>

          <div className="flex flex-col gap-3">
            {actionText && onAction && (
              <Button
                onClick={onAction}
                className="bg-gradient-primary text-white shadow-medium hover:shadow-large transition-all duration-300"
              >
                {actionText}
              </Button>
            )}

            <Button
              variant="outline"
              onClick={onClose}
              className="border-2 border-border hover:bg-muted"
            >
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};