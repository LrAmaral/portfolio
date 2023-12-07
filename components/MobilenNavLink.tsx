import Link  from 'next/link'
import { motion } from 'framer-motion'

import { MobileNavLinkProps } from '@/app/@types/mobilenav'
import { mobileLinkVars } from '@/app/utils/mobileLinkVars'
import { cn } from '../app/lib/utils'

const MobileNavLink = ({ href, label }: MobileNavLinkProps) => {
  return (
    <motion.div variants={mobileLinkVars} className={cn("hover:text-alt transition-colors duration-300 ease-in-out")}>
      <Link href={href}>
        {label}
      </Link>
    </motion.div>
  )
}

export default MobileNavLink