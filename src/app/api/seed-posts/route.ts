import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import { User } from "@/models/User";
import { Post } from "@/models/Post";

const dummyPosts = [
  {
    title: "Understanding Article 21: Right to Life and Personal Liberty",
    slug: "understanding-article-21-right-to-life",
    content: "Article 21 of the Constitution of India provides that 'No person shall be deprived of his life or personal liberty except according to procedure established by law.' Over the years, the Supreme Court has expanded the scope of Article 21 to include the right to a clean environment, right to free legal aid, right to privacy, and more. This makes it one of the most dynamic fundamental rights.",
    summary: "A deep dive into the expanding scope of Article 21 and its significance in Indian Constitutional Law.",
    category: "Fundamental Rights",
    tags: ["Article 21", "Right to Life", "Supreme Court"],
    published: true,
  },
  {
    title: "The Kesavananda Bharati Case: Basic Structure Doctrine",
    slug: "kesavananda-bharati-case-basic-structure",
    content: "In 1973, the Supreme Court of India delivered a landmark judgment in the Kesavananda Bharati v. State of Kerala case. The court held that while the Parliament has wide powers to amend the Constitution under Article 368, it cannot alter its 'Basic Structure'. This doctrine has since served as a crucial check on parliamentary power.",
    summary: "Analyzing the landmark 1973 case that established the Basic Structure Doctrine.",
    category: "Case Analysis",
    tags: ["Basic Structure", "Landmark Judgment", "Article 368"],
    published: true,
  },
  {
    title: "Directive Principles of State Policy (DPSP): Part IV Explained",
    slug: "directive-principles-of-state-policy-dpsp",
    content: "Part IV of the Indian Constitution contains the Directive Principles of State Policy (DPSP). While these principles are not justiciable in a court of law, they are fundamental in the governance of the country. They aim to establish social and economic democracy, directing the State to ensure equitable distribution of resources, right to work, and uniform civil code.",
    summary: "An overview of the significance of DPSPs and their role in shaping policies.",
    category: "DPSP",
    tags: ["Part IV", "Governance", "Welfare State"],
    published: true,
  },
  {
    title: "The 42nd Amendment: The Mini Constitution",
    slug: "42nd-amendment-mini-constitution",
    content: "Enacted during the Emergency in 1976, the 42nd Amendment Act brought sweeping changes to the Constitution. It added the words 'Socialist', 'Secular', and 'Integrity' to the Preamble, inserted Fundamental Duties (Part IVA), and attempted to curtail the power of judicial review. Many of its controversial provisions were later undone by the 44th Amendment.",
    summary: "Examining the widespread changes introduced by the 42nd Amendment in 1976.",
    category: "Amendments",
    tags: ["42nd Amendment", "Emergency", "Preamble"],
    published: true,
  },
  {
    title: "Freedom of Speech and Expression: Article 19(1)(a)",
    slug: "freedom-of-speech-expression-article-19",
    content: "Article 19(1)(a) guarantees to all citizens the right to freedom of speech and expression. However, this right is not absolute and is subject to 'reasonable restrictions' under Article 19(2) in the interest of sovereignty, integrity of India, security of the state, friendly relations with foreign states, public order, decency, or morality.",
    summary: "Exploring the boundaries and reasonable restrictions on the Freedom of Speech in India.",
    category: "Fundamental Rights",
    tags: ["Article 19", "Freedom of Speech", "Reasonable Restrictions"],
    published: true,
  },
  {
    title: "Uniform Civil Code: Article 44 Debate",
    slug: "uniform-civil-code-article-44",
    content: "Article 44, one of the Directive Principles, states that the State shall endeavor to secure for the citizens a Uniform Civil Code (UCC) throughout the territory of India. The implementation of a UCC would replace personal laws based on the scriptures and customs of each major religious community with a common set of laws governing every citizen. This remains a highly debated topic.",
    summary: "Discussing the complexities and continuous debates surrounding the Uniform Civil Code.",
    category: "DPSP",
    tags: ["Article 44", "UCC", "Personal Laws"],
    published: true,
  },
  {
    title: "Maneka Gandhi v. Union of India: Reimagining Personal Liberty",
    slug: "maneka-gandhi-v-union-of-india",
    content: "The 1978 Maneka Gandhi case revolutionized the interpretation of Article 21. The Supreme Court established that the 'procedure established by law' must be fair, just, and reasonable, and not arbitrary or oppressive. It also highlighted the interconnectedness of Articles 14, 19, and 21 (the 'Golden Triangle').",
    summary: "How the Maneka Gandhi case broadened the horizon of personal liberty and natural justice.",
    category: "Case Analysis",
    tags: ["Article 21", "Maneka Gandhi", "Golden Triangle"],
    published: true,
  },
  {
    title: "The 73rd and 74th Amendments: Decentralization of Power",
    slug: "73rd-74th-amendments-decentralization",
    content: "Passed in 1992, the 73rd and 74th Constitutional Amendments institutionalized Panchayati Raj Institutions (PRIs) and Urban Local Bodies (ULBs) respectively. They added Parts IX and IXA, providing a three-tier system of local governance, thereby strengthening democracy at the grassroots level.",
    summary: "Analyzing the impact of the 1992 amendments on local self-government in India.",
    category: "Amendments",
    tags: ["Panchayati Raj", "Local Governance", "Decentralization"],
    published: true,
  },
  {
    title: "Right to Equality: Articles 14-18 Explained",
    slug: "right-to-equality-articles-14-18",
    content: "The Right to Equality is one of the chief guarantees of the Constitution. It encompasses equality before the law (Article 14), prohibition of discrimination on grounds of religion, race, caste, sex or place of birth (Article 15), equality of opportunity in public employment (Article 16), abolition of untouchability (Article 17), and abolition of titles (Article 18).",
    summary: "A comprehensive look at the Right to Equality and its various facets under the Constitution.",
    category: "Fundamental Rights",
    tags: ["Article 14", "Equality", "Discrimination"],
    published: true,
  },
  {
    title: "Separation of Powers in the Indian Context",
    slug: "separation-of-powers-india",
    content: "Unlike the American Constitution, the Indian Constitution does not strictly separate the powers among the Executive, Legislature, and Judiciary. Instead it is based on a system of checks and balances. The executive is part of the legislature, and the judiciary has the power of judicial review.",
    summary: "Understanding how checks and balances operate rather than strict separation of powers.",
    category: "General",
    tags: ["Checks and Balances", "Executive", "Judiciary", "Legislature"],
    published: true,
  }
];

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    // Find any user to be the author
    let user = await User.findOne();
    
    // If no user exists, create a dummy admin
    if (!user) {
      user = await User.create({
        name: "Admin User",
        email: "admin@example.com",
        password: "hashedpassword", // Not a real password
        role: "admin",
      });
    }

    // Prepare posts with the user ID as author and add a publish date
    const postsToInsert = dummyPosts.map(post => ({
      ...post,
      author: user._id,
      publishedAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)), // Random date in the past
    }));

    // Clear existing posts (optional, keeping it clean)
    // await Post.deleteMany({});

    // Bulk insert the dummy data
    await Post.insertMany(postsToInsert);

    return NextResponse.json({ message: "Successfully seeded " + postsToInsert.length + " posts!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to seed posts" }, { status: 500 });
  }
}
