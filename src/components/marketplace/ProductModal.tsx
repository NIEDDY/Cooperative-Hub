import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import { Product } from '../../pages/Marketplace'
import { Badge } from '../ui/badge'
import { ShoppingCart } from 'lucide-react'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null

  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      {/* Increased modal width and height, responsive with max-w-5xl */}
      <DialogContent className="max-w-5xl w-[90vw] p-8 rounded-2xl md:p-10 bg-white shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            {product.title}
          </DialogTitle>
        </DialogHeader>

        {/* Responsive layout with taller image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={product.image || 'https://via.placeholder.com/600x700?text=Product+Image'}
              alt={product.title}
              className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge className="mb-2 text-sm px-3 py-1">{product.cooperative}</Badge>
              <p className="text-3xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Buttons section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex-1 py-3 text-lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1 py-3 text-lg"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductModal
