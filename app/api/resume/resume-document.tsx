import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import { PROFILE, SUMMARY, EXPERIENCE, RESUME_SKILLS } from "@/lib/resume-data";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#111111",
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
  },
  title: {
    marginTop: 2,
    fontSize: 12,
    color: "#059669",
    fontFamily: "Helvetica-Bold",
  },
  contactRow: {
    marginTop: 8,
    flexDirection: "row",
    gap: 12,
    fontSize: 9,
    color: "#444444",
  },
  sectionTitle: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    paddingBottom: 4,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#333333",
  },
  experienceItem: {
    marginBottom: 10,
  },
  experienceHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  company: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
  },
  role: {
    fontSize: 10,
    color: "#444444",
    marginTop: 1,
  },
  period: {
    fontSize: 9,
    color: "#666666",
  },
  bullet: {
    flexDirection: "row",
    marginTop: 4,
    gap: 4,
  },
  bulletDot: {
    fontSize: 10,
    color: "#059669",
  },
  bulletText: {
    fontSize: 9.5,
    lineHeight: 1.4,
    color: "#333333",
    flex: 1,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  skillGroup: {
    width: "47%",
  },
  skillCategory: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginBottom: 3,
  },
  skillItem: {
    fontSize: 9.5,
    color: "#333333",
    lineHeight: 1.4,
  },
  footer: {
    marginTop: 18,
    fontSize: 9,
    color: "#666666",
  },
  link: {
    color: "#059669",
    textDecoration: "none",
  },
});

export function ResumeDocument() {
  return (
    <Document title={`${PROFILE.name} - Resume`} author={PROFILE.name}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{PROFILE.name}</Text>
        <Text style={styles.title}>
          {PROFILE.title} - {PROFILE.tagline}
        </Text>
        <View style={styles.contactRow}>
          <Text>{PROFILE.email}</Text>
          <Link src={PROFILE.linkedin} style={styles.link}>
            LinkedIn
          </Link>
          <Text>{PROFILE.languages}</Text>
        </View>

        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.summary}>{SUMMARY}</Text>

        <Text style={styles.sectionTitle}>Experience</Text>
        {EXPERIENCE.map((item) => (
          <View key={`${item.company}-${item.role}`} style={styles.experienceItem}>
            <View style={styles.experienceHeaderRow}>
              <View>
                <Text style={styles.company}>{item.company}</Text>
                <Text style={styles.role}>{item.role}</Text>
              </View>
              <Text style={styles.period}>{item.period}</Text>
            </View>
            {item.highlights.map((highlight) => (
              <View key={highlight} style={styles.bullet}>
                <Text style={styles.bulletDot}>-</Text>
                <Text style={styles.bulletText}>{highlight}</Text>
              </View>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsGrid}>
          {RESUME_SKILLS.map((group) => (
            <View key={group.category} style={styles.skillGroup}>
              <Text style={styles.skillCategory}>{group.category}</Text>
              {group.items.map((item) => (
                <Text key={item} style={styles.skillItem}>
                  {item}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.summary}>{PROFILE.education}</Text>
      </Page>
    </Document>
  );
}
