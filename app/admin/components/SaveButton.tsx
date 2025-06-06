'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SaveButtonProps {
  onSave: () => void;
  isLoading: boolean;
  saveStatus: string;
}

export default function SaveButton({ onSave, isLoading, saveStatus }: SaveButtonProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <Button
          onClick={onSave}
          disabled={isLoading}
          className="w-full"
          size="lg"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
          }}
        >
          {isLoading ? 'Saving Changes...' : 'Save to Database'}
        </Button>
        
        {saveStatus && (
          <div className="text-center mt-3">
            <span className="text-sm font-medium">{saveStatus}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 