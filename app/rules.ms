DO NOT USE DARKENING OVERLAYS UNLESS TOLD TO DO SO EXPLICITLY

This is using tailwind v4, always use shadcn when it makes sense. this is next js 15 app router. 
I want to use drizzle kit, neon, and netlify. I have the netlify cli installed
all tables for this project will start with "tada_"
Use css variables for font, colors, and spacing with tailwind
use server actions instead of api routes whenever possible
routes should be modular with their own folder for components and serveractions. components that will be reused by the whole site should be stored in a main components folder.
images should never be darkened with an overlay. If text needs to be readable overtop of images, it should should blur the image directly behind the text. 
I am using powershell for the terminal

shadcn is now shadcn not shadcn-ui

beware -  `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities

## CSS Variables System
- Database-driven CSS variables stored in `tada_css_variables` table (Drizzle + Neon)
- Variables loaded in layout.tsx before page render and injected into :root
- Fallback system: database values override defaults in `lib/css-variables.ts`
- Default primary font: Quicksand (with fallbacks if DB unavailable)
- Categories: typography, colors, spacing
- Use `var(--variable-name)` in styles, always with fallbacks
- Seeding script available: `npm run db:seed`
- CSS variables should be used in inline styles or style props, not just classes 

## Netlify Environment Variables
- Use `netlify env:set VARIABLE_NAME "value"` to add new environment variables
- Check current variables with `netlify env:list`
- All database and API keys should be added to Netlify for production deployment
- Environment variables are automatically available in deployed Next.js app

- Use `netlify status` to verify site connection before adding variables 


### Best Practices
- ✅ Always use `<img>` tags, never `<Image>` from Next.js
- ✅ Include `getImagePath()` helper in components that display ImageKit images
- ✅ Use appropriate transformations for context (thumbnails vs full-size)
- ✅ Store `imagekitFileId` for deletion operations
- ✅ Set `images.unoptimized: true` in `next.config.ts`
- ✅ Disable `@next/next/no-img-element` ESLint rule

### Folder Organization
- `/tada/` - Default folder for images without specific folder assignment
- `/tada/folder_{folderId}` - Organized by database folder structure
- Mirrors the database folder hierarchy for easy management

## ImageKit Integration

This project uses ImageKit for image storage, optimization, and delivery instead of Next.js Image component to avoid double optimization costs and maintain full control over image transformations.

### Configuration
- **Endpoint**: `https://ik.imagekit.io/crimsonstack`
- **Public Key**: Available in client-side `imagekitConfig`
- **Private Key**: Server-side only via environment variables
- **Folder Structure**: All images stored under `/tada/` with optional subfolders for organization

### Image Handling Patterns

#### 1. **Upload Pattern** (Server Actions)
```typescript
// Upload to ImageKit with folder organization
const uploadResponse = await imagekit.upload({
  file: buffer,
  fileName: file.name,
  folder: folderId ? `/tada/folder_${folderId}` : '/tada',
  useUniqueFileName: true,
});

// Store metadata in database with ImageKit references
await db.insert(tadaImages).values({
  imagekitFileId: uploadResponse.fileId,
  imagekitUrl: uploadResponse.url,
  // ... other metadata
});
```

#### 2. **Display Pattern** (Components)
```typescript
// Helper function to extract relative path from full ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

// Display with transformations
<img
  src={`${imagekitConfig.urlEndpoint}${getImagePath(image.imagekitUrl)}?tr=w-200,h-200,q-80`}
  alt={image.alt || 'Description'}
  className="..."
/>
```

#### 3. **Transformation Syntax**
- **Resize**: `?tr=w-200,h-200` (width-height)
- **Quality**: `?tr=q-80` (quality 80%)
- **Combined**: `?tr=w-400,h-300,q-90`
- **Format**: Auto-optimized (WebP/AVIF when supported)

#### 4. **Component Integration**
- **ParallaxImage**: Accepts `transformation` prop for custom ImageKit params
- **Gallery Components**: Use consistent sizing (200x200 thumbnails, 400px detail view)
- **Hero Section**: Large format with high quality (`w-1920,h-1080,q-90`)

### Environment Variables Required 

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key

