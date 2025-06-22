'use client';

import { useState, useEffect } from 'react';
import { getAllCopyContent, updateCopyContent, type CopyContentData } from '@/lib/copy-actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Save, Bold, Italic, Underline } from 'lucide-react';

const pageOptions = [
  { value: 'home', label: 'Home Page' },
  { value: 'about', label: 'About Page' },
  { value: 'contact', label: 'Contact Page' },
];

const sectionOptions = {
  home: [
    { value: 'about-us', label: 'About Us Section' },
  ],
  about: [
    { value: 'team', label: 'Team Section' },
    { value: 'our-approach', label: 'Our Approach Section' },
    { value: 'meet-team-header', label: 'Meet the Team Header' },
  ],
  contact: [
    { value: 'business-hours', label: 'Business Hours' },
    { value: 'services-residential', label: 'Residential Services' },
    { value: 'services-commercial', label: 'Commercial Services' },
  ],
};

const contentTypeOptions = [
  { value: 'paragraph', label: 'Paragraph' },
  { value: 'heading', label: 'Heading' },
  { value: 'list', label: 'List' },
  { value: 'address', label: 'Address' },
];

export default function CopySettings() {
  const [copyContent, setCopyContent] = useState<CopyContentData[]>([]);
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [editingContent, setEditingContent] = useState<CopyContentData | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingText, setEditingText] = useState<string>('');
  const [editingSections, setEditingSections] = useState<CopyContentData[]>([]);

  useEffect(() => {
    loadCopyContent();
  }, []);

  const loadCopyContent = async () => {
    try {
      const content = await getAllCopyContent();
      setCopyContent(content);
    } catch (error) {
      console.error('Failed to load copy content:', error);
    } finally {
      setIsLoading(false);
    }
  };



  const handleEditContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingContent) return;
    
    // Clean up the HTML content (convert <b> to <strong>, <i> to <em>, etc.)
    const cleanContent = editingText
      .replace(/<b>/g, '<strong>')
      .replace(/<\/b>/g, '</strong>')
      .replace(/<i>/g, '<em>')
      .replace(/<\/i>/g, '</em>');
    
    const data = {
      content: cleanContent,
    };

    const result = await updateCopyContent(editingContent.id, data);
    
    if (result.success) {
      await loadCopyContent();
      setIsEditDialogOpen(false);
      setEditingContent(null);
      setEditingText('');
    } else {
      console.error('Failed to update content:', result.error);
    }
  };

  // HTML entity decode/encode helpers
  const decodeHtmlEntities = (text: string): string => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  };

  const encodeHtmlEntities = (text: string): string => {
    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    return textarea.innerHTML;
  };

  const openEditDialog = (content: CopyContentData) => {
    // Check if this is a section with multiple related items
    if (content.page === 'contact' && (content.section === 'business-hours' || content.section.includes('services-'))) {
      const relatedSections = copyContent.filter(item => 
        item.page === 'contact' && (
          (content.section === 'business-hours' && item.section === 'business-hours') ||
          (content.section.includes('services-') && item.section.includes('services-'))
        )
      );
      setEditingSections(relatedSections);
    } else {
      setEditingContent(content);
      setEditingText(content.content);
    }
    
    setIsEditDialogOpen(true);
  };

  const applyFormattingToSection = (sectionIndex: number, command: string) => {
    const editor = document.getElementById(`content-editor-${sectionIndex}`) as HTMLDivElement;
    if (!editor) return;

    editor.focus();
    document.execCommand(command, false);
    
    // Update the specific section content
    setEditingSections(prev => 
      prev.map((item, i) => 
        i === sectionIndex ? { ...item, content: editor.innerHTML } : item
      )
    );
  };

  const handleEditSections = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Update all sections
      const updatePromises = editingSections.map(section => {
        const cleanContent = section.content
          .replace(/<b>/g, '<strong>')
          .replace(/<\/b>/g, '</strong>')
          .replace(/<i>/g, '<em>')
          .replace(/<\/i>/g, '</em>');
        
        return updateCopyContent(section.id, {
          content: cleanContent,
        });
      });

      const results = await Promise.all(updatePromises);
      
      if (results.every(result => result.success)) {
        await loadCopyContent();
        setIsEditDialogOpen(false);
        setEditingSections([]);
      } else {
        console.error('Failed to update some content sections');
      }
    } catch (error) {
      console.error('Failed to update sections:', error);
    }
  };

  const applyFormatting = (command: string) => {
    const editor = document.getElementById('content-editor') as HTMLDivElement;
    if (!editor) return;

    // Save current selection
    const selection = window.getSelection();
    const range = selection?.rangeCount ? selection.getRangeAt(0) : null;

    editor.focus();
    document.execCommand(command, false);
    
    // Restore selection if it existed
    if (range && selection) {
      try {
        selection.removeAllRanges();
        selection.addRange(range);
      } catch (e) {
        // Range might be invalid after formatting, just focus the editor
        editor.focus();
      }
    }
    
    // Update the editing text state with the new HTML content
    setEditingText(editor.innerHTML);
  };

  const filteredContent = copyContent.filter(item => item.page === selectedPage);

  // Group content by sections for better organization
  const getGroupedContent = (content: CopyContentData[]) => {
    const sectionGroups: { [key: string]: CopyContentData[] } = {};
    
    // Group by section
    content.forEach(item => {
      const sectionKey = item.section;
      if (!sectionGroups[sectionKey]) {
        sectionGroups[sectionKey] = [];
      }
      sectionGroups[sectionKey].push(item);
    });

    // Convert to display format
    return Object.entries(sectionGroups).map(([section, items]) => {
      // Create readable section titles
      const getSectionTitle = (section: string) => {
        switch (section) {
          case 'about-us': return 'About Us';
          case 'team': return 'Team';
          case 'our-approach': return 'Our Approach';
          case 'meet-team': return 'Meet the Team';
          case 'maureen-bio': return 'Maureen Bio';
          case 'joanna-bio': return 'Joanna Bio';
          case 'business-hours': return 'Business Hours';
          case 'services-residential': return 'Residential Services';
          case 'services-commercial': return 'Commercial Services';
          default: return section.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');
        }
      };

      const getSectionDescription = (section: string, itemCount: number) => {
        switch (section) {
          case 'about-us': return 'Main about us content and description';
          case 'team': return 'Team introduction and overview';
          case 'our-approach': return 'Company approach and methodology';
          case 'meet-team': return 'Individual team member information';
          case 'maureen-bio': return 'Maureen\'s complete biography and background';
          case 'joanna-bio': return 'Joanna\'s complete biography and background';
          case 'business-hours': return 'Complete business hours information';
          case 'services-residential': return 'Residential services details';
          case 'services-commercial': return 'Commercial services details';
          default: return `${itemCount} content ${itemCount === 1 ? 'item' : 'items'}`;
        }
      };

      return {
        type: items.length > 1 ? 'group' : 'single' as 'single' | 'group',
        data: items.length > 1 ? items : items[0],
        title: getSectionTitle(section),
        description: getSectionDescription(section, items.length)
      };
    });
  };

  const groupedContent = getGroupedContent(filteredContent);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading copy content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
          Copy Settings
        </h3>
        <p className="text-muted-foreground" style={{ color: 'var(--color-text-muted)' }}>
          Edit existing text content across your website
        </p>
      </div>

      {/* Page Filter Tabs */}
      <Tabs value={selectedPage} onValueChange={setSelectedPage}>
        <TabsList>
          {pageOptions.map(page => (
            <TabsTrigger key={page.value} value={page.value}>
              {page.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {pageOptions.map(page => (
          <TabsContent key={page.value} value={page.value} className="space-y-4">
            {groupedContent.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">
                    No content found for {page.label}.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {groupedContent.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">
                            {item.type === 'group' ? item.title : (item.data as CopyContentData).title || (item.data as CopyContentData).sectionKey}
                          </CardTitle>
                          <CardDescription>
                            {item.type === 'group' 
                              ? item.description 
                              : (item.data as CopyContentData).description || `${(item.data as CopyContentData).section} - ${(item.data as CopyContentData).contentType}`}
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          {item.type === 'group' ? (
                            <>
                              <Badge variant="secondary">
                                {(item.data as CopyContentData[])[0]?.section}
                              </Badge>
                              <Badge variant="outline">
                                {(item.data as CopyContentData[]).length} {(item.data as CopyContentData[]).length === 1 ? 'item' : 'items'}
                              </Badge>
                            </>
                          ) : (
                            <>
                              <Badge variant="secondary">{(item.data as CopyContentData).section}</Badge>
                              <Badge variant="outline">{(item.data as CopyContentData).contentType}</Badge>
                            </>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {item.type === 'group' ? (
                          // Group content preview
                          <div>
                            <Label className="text-sm font-medium">Content Sections</Label>
                            <div className="mt-1 space-y-2">
                              {(item.data as CopyContentData[]).map((content, contentIndex) => (
                                <div key={content.id} className="p-2 border rounded-md bg-muted/30">
                                  <div className="text-xs font-medium text-muted-foreground mb-1">
                                    {content.description || content.title || content.sectionKey}
                                  </div>
                                  <div 
                                    className="text-sm max-h-20 overflow-y-auto"
                                    style={{ color: 'var(--color-text)' }}
                                    dangerouslySetInnerHTML={{ __html: content.content }}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          // Single content preview
                          <div>
                            <Label className="text-sm font-medium">Content Preview</Label>
                            <div 
                              className="mt-1 p-3 rounded-md border bg-muted/50 text-sm max-h-32 overflow-y-auto"
                              style={{ color: 'var(--color-text)' }}
                              dangerouslySetInnerHTML={{ __html: (item.data as CopyContentData).content }}
                            />
                          </div>
                        )}
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => openEditDialog(item.type === 'group' ? (item.data as CopyContentData[])[0] : (item.data as CopyContentData))}
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            {item.type === 'group' ? 'Edit Section' : 'Edit'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>



      {/* Edit Content Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingSections.length > 0 ? 'Edit Section' : 'Edit Content'}
            </DialogTitle>
            <DialogDescription>
              {editingSections.length > 0 
                ? `Update all content for ${editingSections[0]?.section === 'business-hours' ? 'Business Hours' : 'Services'} section`
                : `Update the content for ${editingContent?.sectionKey}`
              }
            </DialogDescription>
          </DialogHeader>
          
          {/* Multi-section editing */}
          {editingSections.length > 0 && (
            <form onSubmit={handleEditSections} className="space-y-6">
              {editingSections.map((section, index) => (
                <div key={section.id} className="space-y-2 p-4 border rounded-md">
                  <Label className="text-sm font-medium text-muted-foreground">
                    {section.description || section.title || section.sectionKey}
                  </Label>
                  
                  {/* Formatting Toolbar for each section */}
                  <div className="flex gap-1 mb-2 p-2 bg-muted rounded-md">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => applyFormattingToSection(index, 'bold')}
                      className="h-8 w-8 p-0"
                      title="Bold"
                    >
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => applyFormattingToSection(index, 'italic')}
                      className="h-8 w-8 p-0"
                      title="Italic"
                    >
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => applyFormattingToSection(index, 'underline')}
                      className="h-8 w-8 p-0"
                      title="Underline"
                    >
                      <Underline className="h-4 w-4" />
                    </Button>
                  </div>

                  <div
                    id={`content-editor-${index}`}
                    contentEditable
                    className="min-h-[80px] p-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    style={{ 
                      color: 'var(--color-text)',
                      fontFamily: 'var(--font-secondary)'
                    }}
                    suppressContentEditableWarning={true}
                    dangerouslySetInnerHTML={{ __html: section.content }}
                    onBlur={(e) => {
                      const target = e.target as HTMLDivElement;
                      setEditingSections(prev => 
                        prev.map((item, i) => 
                          i === index ? { ...item, content: target.innerHTML } : item
                        )
                      );
                    }}
                  />
                </div>
              ))}
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => {
                  setIsEditDialogOpen(false);
                  setEditingSections([]);
                }}>
                  Cancel
                </Button>
                <Button type="submit">
                  <Save className="w-4 h-4 mr-2" />
                  Update All Content
                </Button>
              </DialogFooter>
            </form>
          )}

          {/* Single content editing */}
          {editingContent && editingSections.length === 0 && (
            <form onSubmit={handleEditContent} className="space-y-4">
              <div>
                <Label htmlFor="content">Content</Label>
                
                {/* Formatting Toolbar */}
                <div className="flex gap-1 mb-2 p-2 bg-muted rounded-md">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('bold')}
                    className="h-8 w-8 p-0"
                    title="Bold"
                  >
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('italic')}
                    className="h-8 w-8 p-0"
                    title="Italic"
                  >
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('underline')}
                    className="h-8 w-8 p-0"
                    title="Underline"
                  >
                    <Underline className="h-4 w-4" />
                  </Button>
                </div>

                <div
                  id="content-editor"
                  contentEditable
                  className="min-h-[120px] p-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  style={{ 
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-secondary)'
                  }}
                  suppressContentEditableWarning={true}
                  onBlur={(e) => {
                    const target = e.target as HTMLDivElement;
                    setEditingText(target.innerHTML);
                  }}
                  ref={(el) => {
                    if (el && editingText && el.innerHTML !== editingText) {
                      // Only update if content is actually different to avoid cursor jumping
                      const currentSelection = window.getSelection();
                      const range = currentSelection?.rangeCount ? currentSelection.getRangeAt(0) : null;
                      
                      el.innerHTML = editingText;
                      
                      // Restore cursor position
                      if (range && currentSelection) {
                        try {
                          currentSelection.removeAllRanges();
                          currentSelection.addRange(range);
                        } catch (e) {
                          // If range is invalid, place cursor at end
                          const newRange = document.createRange();
                          newRange.selectNodeContents(el);
                          newRange.collapse(false);
                          currentSelection.removeAllRanges();
                          currentSelection.addRange(newRange);
                        }
                      }
                    }
                  }}
                />
                
                {/* Hidden input for form submission */}
                <input type="hidden" name="content" value={editingText} />
              </div>
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  <Save className="w-4 h-4 mr-2" />
                  Update Content
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>


    </div>
  );
} 