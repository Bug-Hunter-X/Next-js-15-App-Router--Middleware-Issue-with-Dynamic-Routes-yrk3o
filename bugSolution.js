```javascript
// pages/product/[id].js

import {unstable_getServerSession} from 'next-auth';
import {authOptions} from '../../pages/api/auth/[...nextauth]';

export default async function ProductPage({params}){
  const session = await unstable_getServerSession(req, res, authOptions);
  
  // ... your component code here
}

// middleware.js

export async function middleware(req) {
  // ... your middleware code here
}

export const config = {
  matcher: ['/product/:path*'], // Match all product routes
};
```