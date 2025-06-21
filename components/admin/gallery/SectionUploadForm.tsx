'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, AlertTriangle } from 'lucide-react';
import { imagekitConfig } from '@/lib/imagekit';
import { 
  setHeroImage, 
  setFirstImage, 
  setAboutUsImage, 
  setMaureenImage, 
  setJoannaImage, 
  setTeamImage, 
  setSecondImage, 
  setThirdImage, 
  setResidentialCoverImage, 
  setCommercialCoverImage 
} from '@/lib/image-actions';

interface SectionUploadFormProps {
  imageType: string | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onUploadComplete: () => void;
}

const SECTION_TITLES: Record<string, string> = {
  hero: 'Hero Image',
  first: 'First Image',
  about: 'About Us Image', 
  maureen: 'Maureen Image',
  joanna: 'Joanna Image',
  team: 'Team Image',
  second: 'Second Image',
  third: 'Third Image',
  residential: 'Residential Cover',
  commercial: 'Commercial Cover'
};

export default function SectionUploadForm() {
  return <div>Section Upload Form</div>;
} 