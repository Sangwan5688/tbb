export const blogs = {
  install_ipa_on_iphone: {
    title: 'How to install IPA on iPhone',
    subtitle: 'A Guide Without Jailbreaking',
    image: '/assets/iphone.webp',
    link: '/blogs/install_ipa_on_iphone',
    related: [{ key: 'arm64_vs_armeabi' }, { key: 'how-to-check-phone-processor' }],
    tags: new Set(['mobile', 'ios', 'ipa', 'iphone', 'jailbreak', 'install', 'guide']),
    publish_date: '2023-02-24',
  },
  arm64_vs_armeabi: {
    title: 'What\'s the difference between Arm64 & Armeabi',
    subtitle: 'Understanding Which App to Download for Your Device',
    image: '/assets/arch_version.webp',
    link: '/blogs/arm64_vs_armeabi',
    related: [{ key: 'how-to-check-phone-processor' }, { key: 'install_ipa_on_iphone' }],
    tags: new Set(['mobile', 'android', 'arm64', 'armeabi', 'architecture']),
    publish_date: '2023-02-25',
  },
  'getting-started-with-flutter': {
    title: 'Flutter App Development',
    subtitle: 'Getting started with Flutter',
    image: '/assets/flutter.webp',
    link: '/blogs/getting-started-with-flutter',
    related: [],
    tags: new Set(['mobile', 'flutter', 'app', 'app development', 'install', 'guide']),
    publish_date: '2023-02-26',
  },
  'how-to-download-torrent-to-google-drive': {
    title: 'How to download Torrent directly to Google Drive',
    subtitle: 'Download torrent directly to Google Drive without downloading',
    image: '/assets/torrent_to_gdrive.webp',
    link: '/blogs/how-to-download-torrent-to-google-drive',
    related: [],
    tags: new Set(['torrent', 'google drive', 'download', 'python', 'script', 'guide']),
    publish_date: '2023-02-27',
  },
  'how-to-check-phone-processor': {
    title: 'How to check Phone Processor',
    subtitle: 'Check which processor your phone has',
    image: '/assets/processor.webp',
    link: '/blogs/how-to-check-phone-processor',
    related: [{ key: 'arm64_vs_armeabi' }, { key: 'install_ipa_on_iphone' }],
    tags: new Set(['mobile', 'android', 'arm64', 'armeabi', 'architecture', 'guide']),
    publish_date: '2023-03-03',
  },
  'what-are-custom-roms': {
    title: 'What are Custom ROMs',
    subtitle: 'Understanding Custom ROMs',
    image: '/assets/rom.webp',
    link: '/blogs/what-are-custom-roms',
    related: [{ key: 'arm64_vs_armeabi' }, { key: 'how-to-check-phone-processor' }, { key: 'install_ipa_on_iphone' }],
    tags: new Set(['mobile', 'android', 'arm64', 'armeabi', 'architecture', 'guide', 'ROM']),
    publish_date: '2023-03-06',
  },
  'how-to-install-custom-rom': {
    title: 'How to install Custom ROM',
    subtitle: 'Give a new life to your old phone',
    image: '/assets/rom.webp',
    link: '/blogs/how-to-install-custom-rom',
    related: [{ key: 'what-are-custom-roms' }, { key: 'arm64_vs_armeabi' }, { key: 'how-to-check-phone-processor' }, { key: 'install_ipa_on_iphone' }],
    tags: new Set(['mobile', 'android', 'arm64', 'armeabi', 'architecture', 'guide', 'ROM']),
    publish_date: '2023-03-09',
  },
};

export const recentPosts = [
  'install_ipa_on_iphone',
  'arm64_vs_armeabi',
  'getting-started-with-flutter',
  'how-to-download-torrent-to-google-drive',
  'how-to-check-phone-processor',
  'what-are-custom-roms',
  'how-to-install-custom-rom',
];
