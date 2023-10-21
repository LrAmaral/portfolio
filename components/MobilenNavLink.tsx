import { MobileNavLinkProps } from '@/app/@types/mobilenav'
import { mobileLinkVars } from '@/app/utils/mobileLinkVars'
import { motion } from 'framer-motion'
import Link  from 'next/link'

const MobileNavLink = ({ href, label }: MobileNavLinkProps) => {
  return (
    <motion.div variants={mobileLinkVars} className="hover:text-alt transition-colors duration-300 ease-in-out" >
      <Link href={href}>
        {label}
      </Link>
    </motion.div>
  )
}

export default MobileNavLink