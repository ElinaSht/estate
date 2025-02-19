import type { SocialNetworks } from '@/types/social-networks.ts'

export interface TeamMember {
  image: string
  name: string
  post: string
  social: SocialNetworks[]
}
