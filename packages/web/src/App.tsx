import { useState } from "react";
import "./App.css";
import { colors, spacing, typography, Text as FintualText } from "fintual-ui";
import { View, Text, TouchableOpacity, ScrollView } from "react-native-web";
import { StyleSheet } from "react-native";

const investments = [
  { id: 1, name: "Reserva", icon: "🏦", type: "corto plazo" },
  { id: 2, name: "Compra", icon: "🏠", subtitle: "Largo plazo" },
  { id: 3, name: "Mi primera inversión", icon: "🌱", subtitle: "Largo plazo" },
];

function App() {
  const [activeTab, setActiveTab] = useState("inicio");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbarContent}>
          <View style={styles.logoContainer}>
            <FintualText size="text-xl" weight="bold" color="primary">
              ◆ Fintual
            </FintualText>
          </View>
          <View style={styles.navLinks}>
            <TouchableOpacity style={[styles.navLink, styles.navLinkActive]}>
              <Text style={[styles.navLinkText, styles.navLinkTextActive]}>
                🏠 Invierte
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>📚 Aprende</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>🎁 Gana</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>👤 Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.headerGreeting}>
        <FintualText size="text-xxl" weight="bold" color="primary">
          Hola Vicente, soy el componente compartido👋
        </FintualText>
        <Text style={styles.greetingSubtitle}>Llevas 1001 días en Fintual</Text>
      </View>

      <View style={styles.tabSection}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "inicio" && styles.tabActive]}
            onPress={() => setActiveTab("inicio")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "inicio" && styles.tabTextActive,
              ]}
            >
              📊 Inicio
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButtonSecondary}>
            <Text style={styles.actionButtonSecondaryText}>
              + Nuevo objetivo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonPrimary}>
            <Text style={styles.actionButtonPrimaryText}>↓ Invertir más</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.leftColumn}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Inversiones</Text>
          </View>

          <View style={styles.investmentsGrid}>
            {investments.map((investment) => (
              <TouchableOpacity
                key={investment.id}
                style={styles.investmentCard}
              >
                <View style={styles.investmentCardContent}>
                  <View style={styles.investmentIcon}>
                    <Text style={styles.investmentIconText}>
                      {investment.icon}
                    </Text>
                  </View>
                  <View style={styles.investmentInfo}>
                    <Text style={styles.investmentName}>{investment.name}</Text>
                    {investment.subtitle && (
                      <Text style={styles.investmentSubtitle}>
                        {investment.subtitle}
                      </Text>
                    )}
                  </View>
                </View>
                <TouchableOpacity style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>🗑️</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}

            <View style={styles.apvCard}>
              <View style={styles.apvContent}>
                <View style={styles.apvIcon}>
                  <Text style={styles.apvIconText}>😊</Text>
                </View>
                <View style={styles.apvInfo}>
                  <Text style={styles.apvName}>Mi primera jubilación</Text>
                  <Text style={styles.apvSubtitle}>
                    APV con beneficios del estado
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>Crear</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Acciones</Text>
          </View>

          <TouchableOpacity style={styles.stockCard}>
            <View style={styles.stockContent}>
              <View style={styles.stockFlag}>
                <Text style={styles.stockFlagText}>🇺🇸</Text>
              </View>
              <Text style={styles.stockName}>Dólares</Text>
            </View>
            <Text style={styles.stockValue}>US $5,21</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Movimientos</Text>
            <View style={styles.cardContent}>
              <Text style={styles.emptyText}>No hay nuevos movimientos</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>Resumen Inversiones</Text>
              <Text style={styles.infoIcon}>ⓘ</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Balance</Text>
              <Text style={styles.summaryValue}>$ 0</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Depositado neto</Text>
              <Text style={styles.summaryValueNegative}>-$ 40.464</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Variación histórica</Text>
              <Text style={styles.summaryValuePositive}>$ 40.464</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>Portafolio Acciones</Text>
              <Text style={styles.infoIcon}>ⓘ</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Balance</Text>
              <Text style={styles.summaryValue}>US $0,00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Compras netas</Text>
              <Text style={styles.summaryValueNegative}>US $-0,58</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Variación histórica</Text>
              <Text style={styles.summaryValuePositive}>US $0,58</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Built with React Native Web + Fintual Design System
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100vh",
    backgroundColor: colors.background.secondary,
  },
  navbar: {
    backgroundColor: colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxl,
  },
  navbarContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
  },
  navLink: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  navLinkActive: {
    borderBottomWidth: 0,
  },
  navLinkText: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
  },
  navLinkTextActive: {
    color: colors.primary[500],
    fontWeight: typography.fontWeight.medium,
  },
  headerGreeting: {
    alignItems: "center",
    paddingVertical: spacing.xxl,
    backgroundColor: colors.background.primary,
  },
  greetingTitle: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  greetingSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
  },
  tabSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.md,
    backgroundColor: colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
    width: "100%",
  },
  tabs: {
    flexDirection: "row",
  },
  tab: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabActive: {
    borderBottomColor: colors.primary[500],
  },
  tabText: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
  },
  tabTextActive: {
    color: colors.text.primary,
    fontWeight: typography.fontWeight.medium,
  },
  actions: {
    flexDirection: "row",
    gap: spacing.md,
  },
  actionButtonSecondary: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border.medium,
    backgroundColor: colors.background.primary,
  },
  actionButtonSecondaryText: {
    fontSize: typography.fontSize.sm,
    color: colors.text.primary,
    fontWeight: typography.fontWeight.medium,
  },
  actionButtonPrimary: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.xl,
    backgroundColor: colors.primary[500],
  },
  actionButtonPrimaryText: {
    fontSize: typography.fontSize.sm,
    color: colors.text.inverse,
    fontWeight: typography.fontWeight.medium,
  },
  mainContent: {
    flexDirection: "row",
    padding: spacing.xxl,
    gap: spacing.xxl,
    width: "100%",
    flex: 1,
  },
  leftColumn: {
    flex: 3,
  },
  rightColumn: {
    flex: 2,
    gap: spacing.md,
  },
  sectionHeader: {
    marginBottom: spacing.md,
    marginTop: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text.primary,
  },
  investmentsGrid: {
    gap: spacing.md,
  },
  investmentCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.background.primary,
    padding: spacing.md,
    borderRadius: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  investmentCardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  investmentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  investmentIconText: {
    fontSize: typography.fontSize.lg,
  },
  investmentInfo: {
    gap: spacing.xxs,
  },
  investmentName: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
  },
  investmentSubtitle: {
    fontSize: typography.fontSize.xs,
    color: colors.text.secondary,
  },
  deleteButton: {
    padding: spacing.sm,
  },
  deleteButtonText: {
    fontSize: typography.fontSize.md,
    opacity: 0.5,
  },
  apvCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.background.primary,
    padding: spacing.md,
    borderRadius: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border.light,
    borderStyle: "dashed",
  },
  apvContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  apvIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.semantic.warningLight,
    alignItems: "center",
    justifyContent: "center",
  },
  apvIconText: {
    fontSize: typography.fontSize.lg,
  },
  apvInfo: {
    gap: spacing.xxs,
  },
  apvName: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
  },
  apvSubtitle: {
    fontSize: typography.fontSize.xs,
    color: colors.text.secondary,
  },
  createButton: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.xl,
    borderWidth: 1,
    borderColor: colors.primary[500],
  },
  createButtonText: {
    fontSize: typography.fontSize.sm,
    color: colors.primary[500],
    fontWeight: typography.fontWeight.medium,
  },
  stockCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.background.primary,
    padding: spacing.md,
    borderRadius: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  stockContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  stockFlag: {
    width: 32,
    height: 24,
    backgroundColor: colors.background.tertiary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  stockFlagText: {
    fontSize: typography.fontSize.md,
  },
  stockName: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
  },
  stockValue: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
  },
  card: {
    backgroundColor: colors.background.primary,
    padding: spacing.md,
    borderRadius: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  cardTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  cardContent: {
    backgroundColor: colors.background.secondary,
    padding: spacing.md,
    borderRadius: spacing.xs,
  },
  emptyText: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    textAlign: "center",
  },
  infoIcon: {
    fontSize: typography.fontSize.sm,
    color: colors.text.tertiary,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.sm,
  },
  summaryLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
  },
  summaryValue: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
  },
  summaryValuePositive: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.semantic.success,
  },
  summaryValueNegative: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.semantic.error,
  },
  footer: {
    padding: spacing.xxl,
    alignItems: "center",
  },
  footerText: {
    fontSize: typography.fontSize.sm,
    color: colors.text.tertiary,
  },
});

export default App;
